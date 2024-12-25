"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";
import type { Project } from "../types/types";

interface ProjectHeaderProps {
  project: Project | null;
  onAddTask: () => void;
}

export function ProjectHeader({ project, onAddTask }: ProjectHeaderProps) {
  if (!project) return null;

  const progressPercentage =
    project.totalTasks > 0
      ? Math.round((project.doneTasks / project.totalTasks) * 100)
      : 0;

  return (
    <div className="border-b rounded-xl dark:bg-gray-950 bg-white dark:text-white shadow-md">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>
          </div>
          <Button onClick={onAddTask}>
            <Plus className="h-4 w-4 mr-2" />
            Add Task
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex-grow">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          <div className="flex space-x-4 text-sm">
            <div>
              <span className="text-muted-foreground">Total Tasks:</span>
              <span className="ml-1 font-medium">{project.totalTasks}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Completed:</span>
              <span className="ml-1 font-medium">{project.doneTasks}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Deadline:</span>
              <span className="ml-1 font-medium">
                {new Date(project.deadline).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
