import BlurPage from "@/components/global/blur-page";
import React from "react";

const PipelinesLayout = ({ children }: { children: React.ReactNode }) => {
  // return <BlurPage>{children}</BlurPage>
  return <div>{children}</div>;
};

export default PipelinesLayout;
