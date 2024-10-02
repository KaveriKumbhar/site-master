import React from "react";
import { EditorElement } from "@/providers/editor/editor-provider";

const convertStylesToString = (styles: React.CSSProperties) => {
  return Object.entries(styles)
    .map(([key, value]) => `${toKebabCase(key)}: ${value};`)
    .join(" ");
};

const toKebabCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

const LinkHtml = ({ element }: { element: EditorElement }) => {
  const { styles, content, id } = element;
  const href = Array.isArray(content) ? "#" : content.href || "";
  const innerText = Array.isArray(content) ? "" : content.innerText || "";

  return `<a id="${id}" style="${convertStylesToString(
    styles
  )}" href="${href}">${innerText}</a>`;
};

export default LinkHtml;
