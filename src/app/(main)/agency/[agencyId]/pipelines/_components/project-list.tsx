import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import type { Project } from "../types/types";

interface ProjectListProps {
  projects: Project[];
  onDeleteProject: (project: Project) => void;
}

export function ProjectList({ projects, onDeleteProject }: ProjectListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="relative hover:shadow-lg transition-shadow"
        >
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">
                  {Math.round((project.doneTasks / project.totalTasks) * 100)}%
                </span>
              </div>
              <Progress
                value={(project.doneTasks / project.totalTasks) * 100}
                className="h-2"
              />
              <div className="flex items-center gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Deadline:</span>
                  <span className="ml-2">
                    {new Date(project.deadline).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Tasks:</span>
                  <span className="ml-2">{project.totalTasks}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Link
                href={`/agency/7db6805f-5285-4aa7-a2fd-402421cdbffb/pipelines/${project.id}`}
              >
                <Button variant="outline">View Project</Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDeleteProject(project)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
