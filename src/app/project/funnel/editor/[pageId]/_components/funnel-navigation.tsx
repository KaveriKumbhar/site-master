"use client";
import { Input } from "@/components/ui/input";
import { TooltipProvider } from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";
import clsx from "clsx";
import { ArrowLeftCircle, ArrowUpLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { FocusEventHandler, useState } from "react";

type Props = {
  pageId: string;
};

const FunnelNavigation = ({ pageId }: Props) => {
  const path = usePathname();
  const router = useRouter();
  //   const { state, dispatch } = useEditor();
  const state = useState(null);
  function dispatch() {}

  const onBlurTitleChange: FocusEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (event.target.value) {
      toast({
        // title: event.target.value,
        description: "Page name updated!!",
      });
    }
  };

  return (
    <TooltipProvider>
      <nav
        className={clsx(
          "border-b-[1px] flex items-center justify-between p-3 md:p-6 py-2 md:py-4 gap-2 transition-all",
          { "!h-0 !p-0 !overflow-hidden": false }
        )}
      >
        <aside className="flex items-center gap-4 max-w-[260px] w-[300px]">
          <Link href={"/project/funnel"}>
            <ArrowUpLeftIcon />
          </Link>

          <div className="flex flex-col w-full gap-1">
            <Input
              defaultValue={"Page 1"}
              className="border-none h-6 m-0 p-0 text-lg"
              onBlur={onBlurTitleChange}
            />

            <span className="text-[0.68rem] md:text-[0.78rem] text-muted-foreground tracking-wider">
              Path: {path}
            </span>
          </div>
        </aside>
      </nav>
    </TooltipProvider>
  );
};

export default FunnelNavigation;
