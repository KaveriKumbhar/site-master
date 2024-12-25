"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Project } from "../types/types";


interface AddProjectFormProps {
  onSubmit: (
    project: Omit<Project, "id" | "totalTasks" | "doneTasks" | "frozenTasks">
  ) => void;
  onCancel: () => void;
}

export function AddProjectForm({ onSubmit, onCancel }: AddProjectFormProps) {
  const [project, setProject] = useState<
    Omit<Project, "id" | "totalTasks" | "doneTasks" | "frozenTasks">
  >({
    name: "",
    dateAdded: new Date().toISOString().split("T")[0],
    deadline: "",
    participants: [],
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(project);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={true} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Project Name</Label>
            <Input
              id="name"
              name="name"
              value={project.name}
              onChange={handleChange}
              placeholder="Enter project name"
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={project.description}
              onChange={handleChange}
              placeholder="Enter project description"
            />
          </div>
          <div>
            <Label htmlFor="deadline">Deadline</Label>
            <Input
              id="deadline"
              name="deadline"
              type="date"
              value={project.deadline}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="participants">Participants (comma-separated)</Label>
            <Input
              id="participants"
              name="participants"
              value={project.participants.join(", ")}
              onChange={(e) =>
                setProject((prev) => ({
                  ...prev,
                  participants: e.target.value.split(",").map((p) => p.trim()),
                }))
              }
              placeholder="Enter participant names"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">Add Project</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
