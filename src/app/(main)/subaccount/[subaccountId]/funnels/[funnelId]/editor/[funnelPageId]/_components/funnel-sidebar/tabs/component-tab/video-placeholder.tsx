import { EditorBtns } from "@/lib/constants";
import { Youtube } from "lucide-react";
import React from "react";

type Props = {};

const VideoPlaceholder = (props: Props) => {
  const onDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return;
    e.dataTransfer.setData("componentType", type);
  };
  return (
    <div
      onDragStart={(e) => onDragStart(e, "video")}
      draggable
      className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      <Youtube size={40} className="text-muted-foreground" />
    </div>
  );
};

export default VideoPlaceholder;
