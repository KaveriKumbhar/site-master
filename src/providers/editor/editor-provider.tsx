"use client";

import { EditorBtns } from "@/lib/constants";
import { EditorAction } from "./editor-actions";
import { createContext, Dispatch, useContext, useReducer } from "react";

// ----------------------------- TYPES -----------------------------------

export type DeviceTypes = "Desktop" | "Tablet" | "Mobile";
export type DatabaseTypes = "MongoDB" | "MySQL" | "Postgresql" | null;

export type EditorElement = {
  id: string;
  styles: React.CSSProperties;
  name: string;
  type: EditorBtns;
  content:
    | EditorElement[]
    | { href?: string; backgroundImage?: string; innerText?: string };
};

export type UserInfo = {
  userId: string;
  hasDatabase: boolean;
  databaseType: DatabaseTypes;
  databaseName: string | undefined;
  collections: string[];
  tables: string[];
};

export type Editor = {
  live: boolean;
  elements: EditorElement[];
  selectedElement: EditorElement;
  device: DeviceTypes;
  previewMode: boolean;
  funnelPageId: string;
};

export type HistoryState = {
  history: Editor[];
  currentIdx: number;
};

export type EditorState = {
  user: UserInfo;
  editor: Editor;
  history: HistoryState;
};

// --------------------- STATE -----------------------------------

// Editors default state (for body tag )

const initialEditorState: EditorState["editor"] = {
  elements: [
    {
      id: "__body",
      content: [],
      name: "__body",
      styles: {},
      type: "__body",
    },
  ],
  selectedElement: {
    id: "",
    content: [],
    name: "",
    styles: {},
    type: null,
  },
  device: "Desktop",
  previewMode: false,
  live: false,
  funnelPageId: "",
};

// History array's default values

const initialHistoryState: HistoryState = {
  history: [initialEditorState],
  currentIdx: 0,
};

// initial state values - state when the editor will be rendered for the first time

const initialState: EditorState = {
  user: {
    userId: "",
    hasDatabase: false,
    databaseType: null,
    databaseName: "",
    collections: [],
    tables: [],
  },
  editor: initialEditorState,
  history: initialHistoryState,
};

// --------------------------- REDUCER -----------------------------------

// utilities - will be used to ease the work, for the reducer functions

const addElement = (
  editorArray: EditorElement[],
  action: EditorAction
): EditorElement[] => {
  if (action.type !== "ADD_ELEMENT")
    throw Error("You sent the wrong type to the Add element editor state");

  return editorArray.map((item) => {
    if (item.id === action.payload.containerId && Array.isArray(item.content)) {
      return {
        ...item,
        content: [...item.content, action.payload.elementDetails],
      };
    } else if (item.content && Array.isArray(item.content)) {
      return {
        ...item,
        content: addElement(item.content, action),
      };
    }
    return item;
  });
};

const updateAnElement = (
  editorArray: EditorElement[],
  action: EditorAction
): EditorElement[] => {
  if (action.type !== "UPDATE_ELEMENT") {
    throw Error("You sent the wrong type to the update element editor state");
  }

  return editorArray.map((item) => {
    if (item.id === action.payload.elementDetails.id) {
      return {
        ...item,
        ...action.payload.elementDetails,
      };
    } else if (item.content && Array.isArray(item.content)) {
      return {
        ...item,
        content: updateAnElement(item.content, action),
      };
    }

    return item;
  });
};

const deleteAnElement = (
  editorArray: EditorElement[],
  action: EditorAction
): EditorElement[] => {
  if (action.type !== "DELETE_ELEMENT") {
    throw new Error(
      "You sent the wrong type to the delete element editor state"
    );
  }

  return editorArray.filter((item) => {
    if (item.id === action.payload.elementDetails.id) {
      return false;
    } else if (item.content && Array.isArray(item.content)) {
      item.content = deleteAnElement(item.content, action);
    }

    return true;
  });
};

// Function to handle each type action we want to be performed on EDITOR

const editorReducer = (
  state: EditorState = initialState,
  action: EditorAction
): EditorState => {
  switch (action.type) {
    case "ADD_ELEMENT":
      const updatedEditorState = {
        ...state.editor,
        elements: addElement(state.editor.elements, action),
      };

      const updatedHistory = [
        ...state.history.history,
        // ...state.history.history.slice(0, state.history.currentIdx + 1),
        { ...updatedEditorState },
      ];

      const newEditorState: EditorState = {
        ...state,
        editor: updatedEditorState,
        history: {
          ...state.history,
          history: updatedHistory,
          currentIdx: updatedHistory.length - 1,
        },
      };

      return newEditorState;

    case "UPDATE_ELEMENT":
      const updatedElements = updateAnElement(state.editor.elements, action);

      const UpdatedElementIsSelected =
        state.editor.selectedElement.id === action.payload.elementDetails.id;

      const updatedEditorStateAfterUpdate: Editor = {
        ...state.editor,
        elements: updatedElements,
        selectedElement: UpdatedElementIsSelected
          ? action.payload.elementDetails
          : {
              id: "",
              content: [],
              name: "",
              styles: {},
              type: null,
            },
      };

      const updatedHistoryAfterUpdate = [
        ...state.history.history,
        { ...updatedEditorStateAfterUpdate },
      ];

      const updatedEditor: EditorState = {
        ...state,
        editor: updatedEditorStateAfterUpdate,
        history: {
          ...state.history,
          history: updatedHistoryAfterUpdate,
          currentIdx: updatedHistoryAfterUpdate.length - 1,
        },
      };

      return updatedEditor;

    case "DELETE_ELEMENT":
      const updatedElementsAfterDelete = deleteAnElement(
        state.editor.elements,
        action
      );

      const updatedEditorStateAfterDelete: Editor = {
        ...state.editor,
        elements: updatedElementsAfterDelete,
      };

      const updatedHistoryStateAfterDelete = [
        ...state.history.history,
        { ...updatedEditorStateAfterDelete },
      ];

      const deletedState = {
        ...state,
        editor: updatedEditorStateAfterDelete,
        history: {
          history: updatedHistoryStateAfterDelete,
          currentIdx: updatedHistoryStateAfterDelete.length - 1,
        },
      };

      return deletedState;

    case "CHANGE_CLICKED_ELEMENT":
      const newSelectedElement =
        action.payload.elementDetails || {
          id: "",
          content: [],
          name: "",
          styles: {},
          type: null,
        } ||
        initialState;

      // Can be Optimized - can be removed when better memory utilization is needed;

      const clickedState = {
        ...state,
        editor: {
          ...state.editor,
          selectedElement: action.payload.elementDetails || {
            id: "",
            content: [],
            name: "",
            styles: {},
            type: null,
          },
          // || initialState
        },
        history: {
          ...state.history,
          history: [
            ...state.history.history.slice(0, state.history.currentIdx + 1),
            {
              ...state.editor,
              selectedElement: newSelectedElement,
            },
          ],
          currentIdx: state.history.currentIdx + 1,
        },
      };

      // In case above code is not supported , try running this one :s

      // const clickedState = {
      //   ...state,
      //   editor: {
      //     ...state.editor,
      //     selectedElement: action.payload.elementDetails || {
      //       id: "",
      //       content: [],
      //       name: "",
      //       styles: {},
      //       type: null,
      //     },
      //     // || initialState
      //   },
      //   history: {
      //     ...state.history,
      //     history: [
      //       ...state.history.history.slice(0, state.history.currentIdx + 1),
      //       { ...state.editor },
      //     ],
      //     currentIdx: state.history.currentIdx + 1,
      //   },
      // };

      return clickedState;

    case "CHANGE_DEVICE":
      const changedDeviceState: EditorState = {
        ...state,
        editor: {
          ...state.editor,
          device: action.payload.device,
        },
      };

      return changedDeviceState;

    case "TOGGLE_PREVIEW_MODE":
      const toggleState: EditorState = {
        ...state,
        editor: {
          ...state.editor,
          previewMode: !state.editor.previewMode,
        },
      };

      return toggleState;

    case "TOGGLE_LIVE_MODE":
      const toggleLiveMode: EditorState = {
        ...state,
        editor: {
          ...state.editor,
          live: action.payload ? action.payload.value : !state.editor.live,
        },
      };

      return toggleLiveMode;

    case "REDO":
      if (state.history.currentIdx < state.history.history.length - 1) {
        const nextIndex = state.history.currentIdx + 1;
        const nextEditorState = {
          ...state.history.history[nextIndex],
        };
        const redoState: EditorState = {
          ...state,
          editor: nextEditorState,
          history: {
            ...state.history,
            currentIdx: nextIndex,
          },
        };

        return redoState;
      }

      return state;

    case "UNDO":
      if (state.history.currentIdx > 0) {
        const prevIndex = state.history.currentIdx - 1;
        const prevEditorState = {
          ...state.history.history[prevIndex],
        };
        const undoState: EditorState = {
          ...state,
          editor: prevEditorState,
          history: {
            ...state.history,
            currentIdx: prevIndex,
          },
        };

        return undoState;
      }
      return state;

    // case "LOAD_LOCALSTORAGE":
    //   const dataFromStorage = localStorage.getItem(action.payload.funnelPageId);
    //   if (dataFromStorage) return JSON.parse(dataFromStorage);
    //   else return state;

    case "LOAD_DATA":
      return {
        ...initialState,
        editor: {
          ...initialState.editor,
          elements: action.payload.elements || initialEditorState.elements,
          live: !!action.payload.withLive,
        },
      };
    case "SET_FUNNELPAGE_ID":
      const { funnelPageId } = action.payload;
      const updatedEditorStateWithFunnelPageId = {
        ...state.editor,
        funnelPageId,
      };

      const updatedHistoryWithFunnelPageId = [
        ...state.history.history.slice(0, state.history.currentIdx + 1),
        { ...updatedEditorStateWithFunnelPageId }, // Save a copy of the updated state
      ];

      const funnelPageIdState = {
        ...state,
        editor: updatedEditorStateWithFunnelPageId,
        history: {
          ...state.history,
          history: updatedHistoryWithFunnelPageId,
          currentIndex: updatedHistoryWithFunnelPageId.length - 1,
        },
      };
      return funnelPageIdState;

    case "CREATE_DATABASE":
      let updatedUserInfo = {
        ...state.user,
        databaseName: action.payload.databaseName,
      };
      return { ...state, user: updatedUserInfo };

    default:
      return state;
  }
};

// ------------- Editor Layout / provider component -------------------------

// create Editor Context (createContext({  state: EditorState,
//                        dispatch: Dispatch<EditorAction> }))

export type EditorContextData = {
  device: DeviceTypes;
  previewMode: boolean;
  setPreviewMode: (previewMode: boolean) => void;
  setDevice: (device: DeviceTypes) => void;
};

// create Editor provider component

export const EditorContext = createContext<{
  state: EditorState;
  dispatch: Dispatch<EditorAction>;
  subaccountId: string;
  funnelId: string;
  // pageDetails: FunnelPage | null  // Prisma Client
}>({
  state: initialState,
  dispatch: () => undefined,
  subaccountId: "",
  funnelId: "",
  // pageDetails: null,
});

// create a custom hook named as "useEditor" to use the context

type EditorProps = {
  children: React.ReactNode;
  subaccountId: string;
  funnelId: string;
  // pageDetails: FunnelPage
};

const EditorProvider = (props: EditorProps) => {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  return (
    <EditorContext.Provider
      value={{
        state,
        dispatch,
        subaccountId: props.subaccountId,
        funnelId: props.funnelId,
        // pageDetails: props.pageDetails,
      }}
    >
      {props.children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor Hook must be used within the EditorProvider");
  }
  return context;
};

export default EditorProvider;
