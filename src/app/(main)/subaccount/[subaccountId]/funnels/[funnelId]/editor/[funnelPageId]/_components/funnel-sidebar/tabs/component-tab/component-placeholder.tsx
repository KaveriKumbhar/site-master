import { EditorBtns } from "@/lib/constants";
import { LayoutPanelTop } from "lucide-react";
import React from "react";

type Props = {};

const ComponentPlaceholder = (props: Props) => {
  const onDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return;
    e.dataTransfer.setData("componentType", type);
  };
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, "component")}
      className=" h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      <LayoutPanelTop size={40} className="text-muted-foreground" />
    </div>
  );
};

export default ComponentPlaceholder;
