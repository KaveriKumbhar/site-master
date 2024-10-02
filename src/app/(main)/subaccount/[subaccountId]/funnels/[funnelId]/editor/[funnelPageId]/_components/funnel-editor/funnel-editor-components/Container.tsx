"use client";
import { defaultStyles, EditorBtns } from "@/lib/constants";
import { EditorElement, useEditor } from "@/providers/editor/editor-provider";
import clsx from "clsx";
import { v4 } from "uuid";
import React from "react";
import { Badge } from "@/components/ui/badge";
import Recursive from "./Recursive";
import { Trash } from "lucide-react";

type Props = {
  element: EditorElement;
};

const Container = ({ element }: Props) => {
  const { state, dispatch } = useEditor();

  const { id, content, name, styles, type } = element;

  const handleDrop = (e: React.DragEvent, type: string) => {
    e.stopPropagation();

    const componentType = e.dataTransfer.getData("componentType") as EditorBtns;
    const sourceId = e.dataTransfer.getData("sourceId");

    console.log(componentType + " " + sourceId + " " + id);

    if (componentType) {
      switch (componentType) {
        case "p":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: { innerText: "Text Element" },
                id: v4(),
                styles: {
                  color: "skyblue",
                  ...defaultStyles,
                },
                type: "p",
                name: "Text",
              },
            },
          });
          break;
        case "div":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: [],
                id: v4(),
                styles: {
                  color: "skyblue",
                  ...defaultStyles,
                },
                type: "div",
                name: "Container",
              },
            },
          });
          break;
        case "2Col":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: [
                  {
                    content: [],
                    id: v4(),
                    styles: {
                      ...defaultStyles,
                    },
                    type: "div",
                    name: "Container",
                  },
                  {
                    content: [],
                    id: v4(),
                    styles: {
                      ...defaultStyles,
                    },
                    type: "div",
                    name: "Container",
                  },
                ],
                id: v4(),
                name: "Two Columns",
                styles: { ...defaultStyles },
                type: "2Col",
              },
            },
          });
          break;
        case "video":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: {
                  src: "https://www.youtube.com/watch?v=wl4m1Rqmq-Y",
                },
                id: v4(),
                styles: {},
                type: "video",
                name: "Video",
              },
            },
          });
          break;
        case "a":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: {
                  innerText: "Link Element",
                  href: "#",
                },
                id: v4(),
                name: "Link",
                styles: {
                  color: "skyblue",
                  ...defaultStyles,
                },
                type: "a",
              },
            },
          });
          break;
        case "component":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: [],
                id: v4(),
                name: "component",
                styles: {
                  color: "skyblue",
                  ...defaultStyles,
                },
                type: "component",
              },
            },
          });
          break;
        case "contactForm":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: [],
                id: v4(),
                name: "Contact Form",
                styles: {},
                type: "contactForm",
              },
            },
          });
          break;

        default:
          break;
      }
    }

    if (sourceId) {
      dispatch({
        type: "REORDER_ELEMENTS",
        payload: {
          sourceId,
          targetId: id,
        },
      });
    }

    e.dataTransfer.clearData();
  };

  const handleDragStart = (e: React.DragEvent, type: string) => {
    e.stopPropagation();
    if (id === "__body") return;

    // e.dataTransfer.setData("componentType", type);
    e.dataTransfer.setData("sourceId", id);

    console.log(id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {
        elementDetails: element,
      },
    });

    console.log("clicked");
    console.log(state.editor.elements);
  };

  const handleDeleteElement = () => {
    dispatch({
      type: "DELETE_ELEMENT",
      payload: { elementDetails: element },
    });
  };

  return (
    <div
      style={styles}
      className={clsx("relative p-4 transition-all group", {
        "max-w-full w-full": type === "div" || type === "2Col",
        "h-fit": type === "div",
        "h-full pb-24": type === "__body",
        "overflow-scroll custom-scrollbar ": type === "__body",
        "flex flex-col md:!flex-row": type === "2Col",
        "!border-blue-500":
          state.editor.selectedElement.id === id &&
          !state.editor.live &&
          state.editor.selectedElement.type !== "__body",
        "!border-yellow-400 !border-4":
          state.editor.selectedElement.id === id &&
          !state.editor.live &&
          state.editor.selectedElement.type === "__body",
        "!border-solid":
          state.editor.selectedElement.id === id && !state.editor.live,
        "border-dashed border-[1px] border-slate-300": !state.editor.live,
      })}
      onDrop={(e) => {
        handleDrop(e, id);
      }}
      onDragStart={(e) => handleDragStart(e, "div")}
      onDragOver={handleDragOver}
      draggable={type !== "__body"}
      onClick={handleOnClick}
    >
      <Badge
        className={clsx(
          "absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg hidden",
          {
            block:
              state.editor.selectedElement.id === element.id &&
              !state.editor.live,
          }
        )}
      >
        {name}
      </Badge>

      {/* Content */}

      {Array.isArray(content) &&
        content.map((child) => <Recursive key={child.id} element={child} />)}

      {/* Element Delete Button */}

      {state.editor.selectedElement.id === element.id &&
        !state.editor.live &&
        state.editor.selectedElement.type !== "__body" && (
          <Badge className="absolute bg-primary px-2.5 py-1 text-xs font-bold -top-[25px] -right-[1px] rounded-none rounded-t-lg !text-white">
            <Trash
              className="cursor-pointer"
              size={16}
              onClick={handleDeleteElement}
            />
          </Badge>
        )}
    </div>
  );
};

export default Container;
