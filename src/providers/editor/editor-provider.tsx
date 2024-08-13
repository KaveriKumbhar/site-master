import { EditorBtns } from "@/lib/constants";
import { EditorAction } from "./editor-actions";

// ----------------------------- TYPES -----------------------------------

export type DeviceTypes = "Desktop" | "Tablet" | "Mobile";

export type EditorElement = {
  id: string;
  styles: React.CSSProperties;
  name: string;
  type: EditorBtns;
  content: EditorElement[] | {};
};

export type Editor = {
  live: boolean;
  elements: EditorElement[];
  selectedElement: EditorElement;
  device: DeviceTypes;
  previewMode: boolean;
  // funnelPageId: string
};

export type HistoryState = {
  history: Editor[];
  currentIdx: number;
};

export type EditorState = {
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
  // funnelPageId: '',
};

// History array's default values

const initialHistoryState: HistoryState = {
  history: [initialEditorState],
  currentIdx: 0,
};

// initial state values - state when the editor will be rendered for the first time

const initialState: EditorState = {
  editor: initialEditorState,
  history: initialHistoryState,
};

// --------------------------- REDUCER -----------------------------------

// Function to handle each type action we want to be performed on EDITOR

const editorReducer = (
  state: EditorState = initialState,
  action: EditorAction
): EditorState => {
  switch (action.type) {
    case "ADD_ELEMENT":
    case "UPDATE_ELEMENT":
    case "DELETE_ELEMENT":
    case "CHANGE_CLICKED_ELEMENT":
    case "CHANGE_DEVICE":
    case "TOGGLE_PREVIEW_MODE":
    case "TOGGLE_LIVE_MODE":
    case "REDO":
    case "UNDO":
    case "LOAD_DATA":
    case "SET_FUNNELPAGE_ID":
    default:
      return state;
  }
};
