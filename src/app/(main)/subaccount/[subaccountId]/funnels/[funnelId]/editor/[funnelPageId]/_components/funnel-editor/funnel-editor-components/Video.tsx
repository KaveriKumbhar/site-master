"use client";

import { Badge } from "@/components/ui/badge";
import { EditorBtns } from "@/lib/constants";
import { EditorElement, useEditor } from "@/providers/editor/editor-provider";
import clsx from "clsx";
import { Trash } from "lucide-react";
import React from "react";

type Props = {
  element: EditorElement;
};

const Video = (props: Props) => {
  let { dispatch, state } = useEditor();

  const styles = props.element.styles;
  const videoUrl = "https://www.youtube.com/embed/";

  const onDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return;
    e.dataTransfer.setData("componentType", type);
  };

  const handleOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {
        elementDetails: props.element,
      },
    });
  };

  const handleDeleteElement = () => {
    dispatch({
      type: "DELETE_ELEMENT",
      payload: { elementDetails: props.element },
    });
  };

  return (
    <div
      style={styles}
      draggable
      onDragStart={(e) => onDragStart(e, "video")}
      onClick={handleOnClick}
      className={clsx(
        "p-[2px] w-full m-[5px] relative text-[16px] transition-all flex items-center justify-center",
        {
          "!border-blue-500":
            state.editor.selectedElement.id === props.element.id,
          "!border-solid": state.editor.selectedElement.id === props.element.id,
          "border-dashed border-[1px] border-slate-300": !state.editor.live,
        }
      )}
    >
      {/* title */}
      {state.editor.selectedElement.id === props.element.id &&
        !state.editor.live && (
          <Badge className="absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg ">
            {state.editor.selectedElement.name}
          </Badge>
        )}

      {/* content */}
      {!Array.isArray(props.element.content) && (
        <iframe
          width={props.element.styles.width || "560"}
          height={props.element.styles.height || "315"}
          src={
            videoUrl + props.element.content.src?.split("=")[1]
            // || "https://youtu.be/j9LYOxngnL4?si=LlEWohgOvIOcAs9U"
          }
          title="Media Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      )}

      {/* delete */}
      {state.editor.selectedElement.id === props.element.id &&
        !state.editor.live && (
          <div className="absolute bg-primary px-2.5 py-1 text-xs font-bold  -top-[25px] -right-[1px] rounded-none rounded-t-lg !text-white">
            <Trash
              className="cursor-pointer"
              size={16}
              onClick={handleDeleteElement}
            />
          </div>
        )}
    </div>
  );
};

export default Video;
