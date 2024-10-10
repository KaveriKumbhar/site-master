"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { saveActivityLogsNotification, upsertFunnelPage } from "@/lib/queries";
import { DeviceTypes, useEditor } from "@/providers/editor/editor-provider";
import { FunnelPage } from "@prisma/client";
import clsx from "clsx";
import {
  ArrowLeftCircle,
  EyeIcon,
  Laptop,
  Redo2,
  Smartphone,
  Tablet,
  Undo2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FocusEventHandler, useEffect } from "react";
import { toast } from "sonner";

type Props = {
  funnelId: string;
  funnelPageDetails?: FunnelPage;
  subaccountId: string;
};

const FunnelEditorNavigation = ({
  funnelId,
  funnelPageDetails = {
    id: "1",
    name: "Name",
    pathName: "location",
    updatedAt: new Date(),
    createdAt: new Date(),
    visits: 0,
    content: null,
    order: 0,
    previewImage: null,
    funnelId: "1",
  },
  subaccountId,
}: Props) => {
  const router = useRouter();
  const { state, dispatch } = useEditor();

  const handleOnBlurTitleChange: FocusEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (event.target.value === funnelPageDetails.name) return;
    if (event.target.value) {
      await upsertFunnelPage(
        subaccountId,
        {
          id: funnelPageDetails.id,
          name: event.target.value,
          order: funnelPageDetails.order,
        },
        funnelId
      );

      toast("Success", {
        description: "Saved Funnel Page title",
      });
      router.refresh();
    } else {
      toast("Oops!", {
        description: "You need to have a title!",
      });
      event.target.value = funnelPageDetails.name;
    }
  };

  const handlePreviewClick = () => {
    dispatch({ type: "TOGGLE_PREVIEW_MODE" });
    dispatch({ type: "TOGGLE_LIVE_MODE" });
  };

  const handleUndo = () => {
    dispatch({ type: "UNDO" });
  };

  const handleRedo = () => {
    dispatch({ type: "REDO" });
  };

  const handleOnSave = async () => {
    const content = JSON.stringify(state.editor.elements);
    try {
      const response = await upsertFunnelPage(
        subaccountId,
        {
          ...funnelPageDetails,
          content,
        },
        funnelId
      );
      await saveActivityLogsNotification({
        agencyId: undefined,
        description: `Updated a funnel page | ${response?.name}`,
        subaccountId: subaccountId,
      });
      toast("Success", {
        description: "Saved Editor",
      });
    } catch (error) {
      toast("Oops!", {
        description: "Could not save editor",
      });
    }
  };

  return (
    <div>
      <nav
        className={clsx(
          "border-b flex items-center justify-between p-6 gap-2 transition-all bg-blue-50 dark:bg-gray-900 shadow-lg rounded-lg",
          { "!h-0 !p-0 !overflow-hidden": state.editor.previewMode }
        )}
      >
        <aside className="flex items-center gap-4 max-w-[260px] w-[300px]">
          <Link href={`/subaccount/${subaccountId}/funnels/${funnelId}`}>
            <ArrowLeftCircle className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
          </Link>
          <div className="flex flex-col w-full">
            <Input
              defaultValue={funnelPageDetails.name}
              className="border-none h-5 m-0 p-0 text-lg bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-300"
              onBlur={handleOnBlurTitleChange}
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Path: /{funnelPageDetails.pathName}
            </span>
          </div>
        </aside>
        <aside>
          <Tabs
            defaultValue="Desktop"
            className="w-fit"
            value={state.editor.device}
            onValueChange={(value) => {
              dispatch({
                type: "CHANGE_DEVICE",
                payload: { device: value as DeviceTypes },
              });
            }}
          >
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-800 rounded-lg h-fit">
              
                  <TabsTrigger
                    value="Desktop"
                    className="w-10 h-10 p-0 data-[state=active]:bg-gray-300 dark:data-[state=active]:bg-gray-700 rounded transition-all"
                  >
                    <Laptop className="text-gray-600 dark:text-gray-300" />
                  </TabsTrigger>
                  <TabsTrigger
                    value="Tablet"
                    className="w-10 h-10 p-0 data-[state=active]:bg-gray-300 dark:data-[state=active]:bg-gray-700 rounded transition-all"
                  >
                    <Tablet className="text-gray-600 dark:text-gray-300" />
                  </TabsTrigger>
                  <TabsTrigger
                    value="Mobile"
                    className="w-10 h-10 p-0 data-[state=active]:bg-gray-300 dark:data-[state=active]:bg-gray-700 rounded transition-all"
                  >
                    <Smartphone className="text-gray-600 dark:text-gray-300" />
                  </TabsTrigger>
            </TabsList>
          </Tabs>
        </aside>
        <aside className="flex items-center gap-4">
          
              <Button
                variant={"ghost"}
                size={"icon"}
                className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-all rounded-lg"
                onClick={handlePreviewClick}
              >
                <EyeIcon className="text-gray-600 dark:text-gray-300" />
              </Button>
              <Button
                disabled={!(state.history.currentIdx > 0)}
                onClick={handleUndo}
                variant={"ghost"}
                size={"icon"}
                className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-all rounded-lg"
              >
                <Undo2 className="text-gray-600 dark:text-gray-300" />
              </Button>
              <Button
                disabled={
                  !(state.history.currentIdx < state.history.history.length - 1)
                }
                onClick={handleRedo}
                variant={"ghost"}
                size={"icon"}
                className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-all rounded-lg mr-4"
              >
                <Redo2 className="text-gray-600 dark:text-gray-300" />
              </Button>
          <div className="flex flex-col item-center mr-4">
            <div className="flex flex-row items-center gap-4">
              <span className="text-gray-600 dark:text-gray-300">Draft</span>
              <Switch disabled defaultChecked={true} />
              <span className="text-gray-600 dark:text-gray-300">Publish</span>
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
             

              Last updated: {funnelPageDetails.updatedAt.toLocaleDateString()}
            </span>
          </div>
          <Button
            onClick={handleOnSave}
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 text-white dark:text-gray-900 transition-all rounded-lg shadow-lg"
          >
            Save
          </Button>
        </aside>
      </nav>
    </div>
  );
};

export default FunnelEditorNavigation;