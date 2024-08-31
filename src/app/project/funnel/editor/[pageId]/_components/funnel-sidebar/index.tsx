"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs } from "@/components/ui/tabs";
import clsx from "clsx";
import React from "react";
import TabList from "./tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { useEditor } from "@/providers/editor/editor-provider";
import SettingsTab from "./tabs/settings-tab";
import ComponentsTab from "./tabs/component-tab";

type Props = {
  pageId: string;
  subaccountId: string;
};

const FunnelSidebar = ({ pageId, subaccountId }: Props) => {
  const { state, dispatch } = useEditor();

  return (
    <Sheet open={true} modal={false}>
      <Tabs>
        <SheetContent
          side={"right"}
          className={clsx(
            "mt-[3.9rem] md:mt-[4.99rem] w-12 md:w-16 z-[60] shadow-none p-0 focus:border-none transition-all overflow-hidden",
            { hidden: state.editor.previewMode }
          )}
        >
          <TabList />
        </SheetContent>
        <SheetContent
          side={"right"}
          className={clsx(
            "mt-[3.9rem] md:mt-[4.99rem] w-full md:w-80 z-[40] shadow-none p-0 mr-9 lg:mr-16 bg-background h-full transition-all overflow-hidden",
            { hidden: state.editor.previewMode }
          )}
        >
          <div className="grid gap-4 h-full pb-36 overflow-scroll">
            {/* Settings Tab */}

            <TabsContent value="Settings">
              {/* Header */}
              <SheetHeader className="text-left p-6">
                {/* Title */}
                <SheetTitle>"koi acha title lagav be"</SheetTitle>

                {/* Description */}
                <SheetDescription>something something...</SheetDescription>
              </SheetHeader>

              {/* Content */}
              <SettingsTab />
            </TabsContent>

            {/* Component Tab */}
            <TabsContent value="Components">
              {/* Header */}
              <SheetHeader className="text-left p-6">
                {/* Title */}
                <SheetTitle>"Components"</SheetTitle>

                {/* Description */}
                <SheetDescription>Just Drag and drop</SheetDescription>
              </SheetHeader>

              {/* Content */}
              <ComponentsTab />
            </TabsContent>
          </div>
        </SheetContent>
      </Tabs>
    </Sheet>
  );
};

export default FunnelSidebar;
