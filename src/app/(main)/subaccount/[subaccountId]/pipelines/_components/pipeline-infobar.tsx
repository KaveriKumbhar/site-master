"use client";
import CreatePipelineForm from "@/components/forms/create-pipeline-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useModal } from "@/providers/modal-provider";
import { Pipeline } from "@prisma/client";
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  subAccountId: string;
  pipelines: Pipeline[];
  pipelineId: string;
};

const PipelineInfoBar = ({ pipelineId, pipelines, subAccountId }: Props) => {
  const { setOpen: setOpenModal, setClose } = useModal();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(pipelineId);

  const handleClickCreatePipeline = () => {
    setOpenModal(
      <CustomModal
        title="Create A Pipeline"
        subheading="Pipelines allows you to group tickets into lanes and track your business processes all in one place."
      >
        <CreatePipelineForm subAccountId={subAccountId} />
      </CustomModal>
    );
  };

  return (
    <div>
      <div className="flex items-end gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? pipelines && Array.isArray(pipelines)
                  ? pipelines.find((pipeline) => pipeline?.id === value)?.name
                  : "No pipeline found"
                : "Select a pipeline..."}

              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            {/* <Command> */}
            {/* <CommandGroup> */}
            {Array.isArray(pipelines) && pipelines.length > 0 ? (
              pipelines?.map((pipeline, i) => (
                <Link
                  key={i}
                  href={`/subaccount/${subAccountId}/pipelines/${pipeline.id}`}
                  className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none 
             hover:bg-gray-800 hover:text-gray-900"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === pipeline.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {pipeline.name}
                </Link>
              ))
            ) : (
              <div className="p-2">No pipelines available</div>
            )}
            {/* </CommandGroup> */}
            {/* <CommandSeparator /> */}
            <Button
              variant="secondary"
              className="flex gap-2 w-full mt-4"
              onClick={handleClickCreatePipeline}
            >
              <Plus size={15} />
              Create Pipeline
            </Button>
            {/* <CommandGroup>
              </CommandGroup> */}
            {/* </Command> */}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default PipelineInfoBar;
