import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tabs } from "@/components/ui/tabs";
import clsx from "clsx";
import React from "react";
import TabList from "./tabs";
import { TabsContent } from "@radix-ui/react-tabs";

type Props = {
  pageId: string;
};

const FunnelSidebar = ({ pageId }: Props) => {
  return (
    <Sheet open={true} modal={false}>
      <Tabs>
        <SheetContent
          side={"right"}
          className={clsx(
            "mt-[3.9rem] md:mt-[4.99rem] w-12 md:w-16 z-[60] shadow-none p-0 focus:border-none transition-all overflow-hidden"
          )}
        >
          <TabList />
        </SheetContent>
        <SheetContent
          side={"right"}
          className={clsx(
            "mt-[3.9rem] md:mt-[4.99rem] w-full md:w-80 z-[40] shadow-none p-0 focus:border-none transition-all overflow-hidden"
          )}
        >
          <div className="grid gap-4 h-full pb-36 overflow-scroll">
            <TabsContent value="Settings">
              <SheetHeader>
                <SheetTitle>"koi acha title lagav be"</SheetTitle>
                <SheetDescription>something something...</SheetDescription>
              </SheetHeader>
              
            </TabsContent>
          </div>
        </SheetContent>
      </Tabs>
    </Sheet>
  );
};

export default FunnelSidebar;
