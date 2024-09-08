import { EditorElement } from "@/providers/editor/editor-provider";

type StructureType = {
    id: string,
    isSelectable: boolean,
    name: string,
    children: StructureType[] | { href?: string | undefined; backgroundImage?: string | undefined; innerText?: string | undefined; },
}

export const stateTraverser = (editor: EditorElement[]): StructureType[] => {
    let structure:StructureType[] = editor.map((item) => {
      if (Array.isArray(item.content)) {
        return {id: item.id, isSelectable: true,
          children: stateTraverser(item.content), name: item.name
        };
      }
      return { id: item.id, isSelectable: true, children: item.content, name: item.name };
    });

    return structure;
  };


//   import { EditorElement } from "@/providers/editor/editor-provider";

// type UpdatedEditorElement = Omit<EditorElement, 'content'> & {
//     children: EditorElement['content'];
//     isSelectable: boolean;
//   };

// export const stateTraverser = (editor: EditorElement[]): UpdatedEditorElement[] => {
//     let structure = editor.map((item): UpdatedEditorElement => {
//       if (Array.isArray(item.content)) {
//         return {
//           ...item,
//           children: stateTraverser(item.content),
//           isSelectable: true,
//         };
//       }
//       return { ...item, isSelectable: true, children: item.content };
//     });

//     return structure;
//   };

