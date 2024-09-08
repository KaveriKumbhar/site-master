import { File, Folder, Tree } from "@/components/magicui/file-tree";
import { EditorElement, useEditor } from "@/providers/editor/editor-provider";

type Props = {};

export function LayersTab(props: Props) {
  const { state, dispatch } = useEditor();

  // const ELEMENTS = [
  //   {
  //     ...stateTraverser(state.editor.elements),
  //   },
  // ];

  const handleOnClick = (e: React.MouseEvent, element: EditorElement) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {
        elementDetails: element,
      },
    });
  };

  const renderFileStructure = (elements: EditorElement[]): JSX.Element[] => {
    return elements.map((item) => {
      if (Array.isArray(item.content)) {
        return (
          <Folder
            key={item.id}
            element={item.name}
            value={item.id}
            onClick={(e) => handleOnClick(e, item)}
          >
            {renderFileStructure(item.content)}
          </Folder>
        );
      } else {
        return (
          <File
            key={item.id}
            value={item.id}
            onClick={(e) => handleOnClick(e, item)}
          >
            <p>{item.name}</p>
          </File>
        );
      }
    });
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-t bg-background ">
      <Tree
        className="p-2 overflow-hidden rounded-md bg-background"
        // elements={ELEMENTS}
      >
        {renderFileStructure(state.editor.elements)}
      </Tree>
    </div>
  );
}
