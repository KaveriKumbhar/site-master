"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Project } from "./types/types";
import { Button } from "@/components/ui/button";
import { ProjectList } from "./_components/project-list";
import { AddProjectForm } from "./_components/add-project-form";

const INITIAL_PROJECTS: Project[] = [
  {
    id: "1",
    name: "CRM System Redesign",
    dateAdded: "2024-01-15",
    deadline: "2024-02-28",
    participants: ["Alex", "Maria", "John"],
    description: "Redesigning the customer relationship management system",
    totalTasks: 12,
    doneTasks: 5,
    frozenTasks: 1,
  },
  // Add more initial projects as needed
];

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);

  const handleAddProject = (newProject: Omit<Project, "id">) => {
    const projectWithId = {
      ...newProject,
      id: `project-${Date.now()}`,
      totalTasks: 0,
      doneTasks: 0,
      frozenTasks: 0,
    };
    setProjects([...projects, projectWithId]);
    setIsAddingProject(false);
  };

  const handleDeleteProject = (project: Project) => {
    setProjectToDelete(project);
  };

  const confirmDeleteProject = () => {
    if (projectToDelete) {
      setProjects(projects.filter((p) => p.id !== projectToDelete.id));
      setProjectToDelete(null);
    }
  };

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button onClick={() => setIsAddingProject(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>
      <ProjectList projects={projects} onDeleteProject={handleDeleteProject} />
      {isAddingProject && (
        <AddProjectForm
          onSubmit={handleAddProject}
          onCancel={() => setIsAddingProject(false)}
        />
      )}
      <AlertDialog
        open={!!projectToDelete}
        onOpenChange={() => setProjectToDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this project?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              project and all its tasks.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeleteProject}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
