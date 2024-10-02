import React from "react";
import { EditorElement } from "@/providers/editor/editor-provider";
import { Button } from "@/components/ui/button";

const CodeGeneratorButton = ({ elements }: { elements: EditorElement[] }) => {
  ///////////////////////////////////////////////////////////////// Utilities //////////////////////////////////////////////////////////////////////////////////
  const handleGenerateCode = () => {
    const componentFiles: { [key: string]: string } = {};
    const mainComponentCode = generateMainComponent(elements, componentFiles);

    downloadFile("MainComponent.jsx", mainComponentCode, "text/jsx");

    Object.entries(componentFiles).forEach(([fileName, content]) => {
      downloadFile(`${fileName}.jsx`, content, "text/jsx");
    });
  };

  const generateComponentCode = (
    component: EditorElement,
    componentFiles: { [key: string]: string }
  ) => {
    const { id, styles, content } = component;
    const componentName = `Component_${id.replace(/-/g, "_")}`;

    const childrenJSX = Array.isArray(content)
      ? content.map((child) => renderElement(child, componentFiles)).join("\n")
      : content?.innerText || "";

    const jsxContent = `
import React from 'react';

const ${componentName} = () => {
  return (
    <div id="${id}" style={${JSON.stringify(styles)}}>
      ${childrenJSX}
    </div>
  );
};

export default ${componentName};
`;

    componentFiles[componentName] = jsxContent;

    return `<${componentName} />`;
  };

  const generateMainComponent = (
    elements: EditorElement[],
    componentFiles: { [key: string]: string }
  ) => {
    const mainComponentJSX = elements
      .map((element) => {
        if (element.name === "component") {
          return generateComponentCode(element, componentFiles);
        } else {
          return renderElement(element, componentFiles);
        }
      })
      .join("\n");

    const imports = Object.keys(componentFiles)
      .map(
        (componentName) => `import ${componentName} from './${componentName}';`
      )
      .join("\n");

    return `
import React from 'react';
${imports}

const MainComponent = () => {
  return (
    <div>
      ${mainComponentJSX}
    </div>
  );
};

export default MainComponent;
`;
  };

  //////////////////////////////////////////////////////////////////////// CODE GENERATOR //////////////////////////////////////////////////////////////////////////////////

  const renderElement = (
    element: EditorElement,
    componentFiles: { [key: string]: string }
  ): string => {
    const { id, name, styles, content, type } = element;

    if (name === "component") {
      // Component elements are handled separately
      return generateComponentCode(element, componentFiles);
    }

    const tag = name === "__body" ? "div" : type;
    const childrenJSX = Array.isArray(content)
      ? content.map((child) => renderElement(child, componentFiles)).join("")
      : content?.innerText || "";

    return `<${tag} id="${id}" style={${JSON.stringify(styles)}}>
      ${childrenJSX}
    </${tag}>`;
  };

  //////////////////////////////////////////////////////////////////// FILE GENERATION UTILITY //////////////////////////////////////////////////////////////////////////

  const downloadFile = (
    fileName: string,
    content: string,
    mimeType: string
  ) => {
    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  return <Button onClick={handleGenerateCode}>Generate JSX Code</Button>;
};

export default CodeGeneratorButton;
