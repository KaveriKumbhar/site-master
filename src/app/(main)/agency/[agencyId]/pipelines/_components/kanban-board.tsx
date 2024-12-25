"use client";

import { Droppable, Draggable } from "react-beautiful-dnd";
import { TaskCard } from "./task-card";
import { Button } from "@/components/ui//button";
import { Plus } from "lucide-react";
import type { Lane, Task } from "../types/types";

interface KanbanBoardProps {
  lanes: Lane[];
  onAddLane: () => void;
  onDeleteLane: (laneId: string) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}
interface LaneColumnProps {
  lane: Lane;
  onDeleteLane: (laneId: string) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  // dragHandleProps: any;
}

export function KanbanBoard({
  lanes,
  onAddLane,
  onDeleteLane,
  onEditTask,
  onDeleteTask,
}: KanbanBoardProps) {
  return (
    <div className="bg-transparent dark:text-white flex space-x-2 overflow-x-auto no-scrollBar min-h-[100%]">
      {lanes.map((lane, index) => (
        <Droppable droppableId={lane.id} type="TASK">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="space-y-3"
            >
              <LaneColumn
                lane={lane}
                onDeleteLane={onDeleteLane}
                onEditTask={onEditTask}
                onDeleteTask={onDeleteTask}
              />
            </div>
          )}
        </Droppable>
      ))}
      <Button
        onClick={onAddLane}
        className="min-h-64 min-w-[20rem] flex flex-col items-center justify-center text-muted-foreground hover:text-primary-foreground bg-transparent outline-dotted outline-blue-600 scale-[99%]"
      >
        <Plus className="h-8 w-8 mb-2" />
        Add Lane
      </Button>
    </div>
  );
}

function LaneColumn({
  lane,
  onDeleteLane,
  onEditTask,
  onDeleteTask,
}: LaneColumnProps) {
  return (
    <div className="dark:bg-gray-900 bg-white dark:text-white min-h-64 rounded-lg p-4 w-80 flex-shrink-0 flex flex-col space-y-2">
      <h3 className="font-semibold text-lg mb-2 w-full flex ">
        {lane.title}{" "}
        {lane.id == "custom" && (
          // <div onClick={onDeleteLane} className="">
          <Plus
            onClick={() => onDeleteLane(lane.id)}
            className="rotate-45 ml-2 text-muted-foreground hover:text-red-500 items-center justify-center cursor-pointer"
          />
          // </div>
        )}
      </h3>
      {/* <Droppable droppableId={lane.id} type="TASK">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-3"
          > */}
      {lane.tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TaskCard
                task={task}
                onEdit={() => onEditTask(task)}
                onDelete={() => onDeleteTask(task.id)}
              />
            </div>
          )}
        </Draggable>
      ))}
      {/* {provided.placeholder}
          </div>
        )} */}
      {/* </Droppable> */}
    </div>
  );
}
