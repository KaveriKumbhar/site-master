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

  console.log("bodyyy");

  const handleDrop = (e: React.DragEvent, type: string) => {
    e.stopPropagation();

    const componentType = e.dataTransfer.getData("componentType") as EditorBtns;

    switch (componentType) {
      case "text":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: "Text Element" },
              id: v4(),
              styles: {
                color: "black",
                ...defaultStyles,
              },
              type: "text",
              name: "Text",
            },
          },
        });
        break;
      case "container":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              styles: {
                color: "black",
                ...defaultStyles,
              },
              type: "container",
              name: "Container",
            },
          },
        });
        break;

      default:
        break;
    }
  };

  const handleDragStart = (e: React.DragEvent, type: string) => {
    if (type === "__body") return;

    e.dataTransfer.setData("componentType", type);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {
        elementDetails: element,
      },
    });

    console.log("clicked");

    if (type === "__body") console.log("body");
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
        "max-w-full": type === "container" || type === "2Col",
        "h-fit": type === "container",
        "h-full": type === "__body",
        "!border-blue-500":
          state.editor.selectedElement.id === id &&
          !state.editor.live &&
          state.editor.selectedElement.type !== "__body",
        "!border-solid":
          state.editor.selectedElement.id === id && !state.editor.live,
        "border-dashed border-[1px] border-slate-300": !state.editor.live,
      })}
      onDrop={(e) => {
        handleDrop(e, id);
      }}
      onDragStart={(e) => handleDragStart(e, "container")}
      onDragOver={handleDragOver}
      draggable={type !== "__body"}
      onClick={handleOnClickBody}
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
          <Badge className="absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg">
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
