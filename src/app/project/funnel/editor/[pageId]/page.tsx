import React from "react";
import FunnelNavigation from "./_components/funnel-navigation";
import FunnelSidebar from "./_components/funnel-sidebar";
import EditorProvider from "@/providers/editor/editor-provider";
import FunnelEditor from "./_components/funnel-editor";

const Funnel = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background">
      <EditorProvider subaccountId={""} funnelId="">
        <FunnelNavigation pageId={"v4"} subaccountId="" />

        <div className="h-full flex justify-center">
          <FunnelEditor pageId=""/>
        </div>

        <FunnelSidebar pageId={"v4"} subaccountId="" />
      </EditorProvider>
    </div> 
  );
};

export default Funnel;
