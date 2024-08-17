import React from "react";
import FunnelNavigation from "./_components/funnel-navigation";
import FunnelSidebar from "./_components/funnel-sidebar";

const Funnel = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background">
      <FunnelNavigation pageId={"v4"} />
      <FunnelSidebar pageId={"v4"} />
    </div>
  );
};

export default Funnel;
