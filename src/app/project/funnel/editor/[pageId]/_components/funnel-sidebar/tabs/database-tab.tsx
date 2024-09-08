import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEditor } from "@/providers/editor/editor-provider";
import React from "react";

type Props = {};

const DatabaseTab = (props: Props) => {
  let { state } = useEditor();

  const handleOnChanges = () => {};
  6;
  return (
    <div className="px-6 py-1 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Label className="text-muted-foreground">ProjectId</Label>
        <Input
          id="DM Sans"
          value={state.editor.selectedElement.styles.fontFamily}
          onChange={handleOnChanges}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-muted-foreground">Password</Label>
        <Input
          id="color"
          onChange={handleOnChanges}
          value={state.editor.selectedElement.styles.color}
        />
      </div>
      <Button>Connect</Button>
    </div>
  );
};

export default DatabaseTab;
