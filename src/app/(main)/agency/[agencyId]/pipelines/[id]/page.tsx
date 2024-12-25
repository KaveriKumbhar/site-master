"use client";

import { useState, useEffect } from "react";
import { Lane, Project, Task } from "../types/types";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { ProjectHeader } from "../_components/project-header";
import { KanbanBoard } from "../_components/kanban-board";
import { AddLaneForm } from "../_components/add-lane-form";
import { AddTaskForm } from "../_components/add-task-form";
import { EditTaskForm } from "../_components/edit-task-form";

const INITIAL_LANES: Lane[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "1",
        title: "Design System",
        description: "Create a cohesive design system for our product",
        status: "todo",
        priority: "high",
        dueDate: "2024-03-01",
        assignee: "Alice",
        tags: ["design", "ui/ux"],
      },
      {
        id: "2",
        title: "User Authentication",
        description: "Implement secure user authentication system",
        status: "todo",
        priority: "high",
        dueDate: "2024-03-15",
        assignee: "Bob",
        tags: ["backend", "security"],
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [],
  },
  {
    id: "done",
    title: "Done",
    tasks: [],
  },
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [lanes, setLanes] = useState<Lane[]>(INITIAL_LANES);
  const [isAddingLane, setIsAddingLane] = useState(false);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    // Fetch project data based on params.id
    // For now, we'll use mock data
    setProject({
      id: params.id,
      name: "Sample Project",
      dateAdded: "2024-01-01",
      deadline: "2024-12-31",
      participants: ["Alice", "Bob", "Charlie"],
      description: "This is a sample project",
      totalTasks: lanes.reduce((acc, lane) => acc + lane.tasks.length, 0),
      doneTasks: lanes.find((lane) => lane.id === "done")?.tasks.length || 0,
      frozenTasks: 0,
    });
  }, [params.id, lanes]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;

    if (!destination) {
      return;
    }

    // if (type === "COLUMN") {
    //   // Handle column (lane) reordering
    //   const newLanes = Array.from(lanes);
    //   const [reorderedLane] = newLanes.splice(source.index, 1);
    //   newLanes.splice(destination.index, 0, reorderedLane);
    //   setLanes(newLanes);
    // } else {
    // Handle task reordering
    const sourceLane = lanes.find((lane) => lane.id === source.droppableId);
    const destLane = lanes.find((lane) => lane.id === destination.droppableId);

    if (!sourceLane || !destLane) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      // Reordering within the same lane
      const newTasks = Array.from(sourceLane.tasks);
      const [reorderedTask] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, reorderedTask);

      const newLanes = lanes.map((lane) =>
        lane.id === sourceLane.id ? { ...lane, tasks: newTasks } : lane
      );
      setLanes(newLanes);
    } else {
      // Moving task to a different lane
      const sourceTask = sourceLane.tasks[source.index];
      const newSourceTasks = Array.from(sourceLane.tasks);
      newSourceTasks.splice(source.index, 1);

      const newDestTasks = Array.from(destLane.tasks);
      newDestTasks.splice(destination.index, 0, {
        ...sourceTask,
        status: destLane.id as Task["status"],
      });

      const newLanes = lanes.map((lane) => {
        if (lane.id === sourceLane.id) {
          return { ...lane, tasks: newSourceTasks };
        }
        if (lane.id === destLane.id) {
          return { ...lane, tasks: newDestTasks };
        }
        return lane;
      });
      setLanes(newLanes);
    }
    // }
  };

  const handleAddLane = (title: string) => {
    const newLane: Lane = {
      id: `custom`,
      title,
      tasks: [],
    };
    setLanes([...lanes, newLane]);
    setIsAddingLane(false);
    };
    
  const handleDeleteLane = (laneId: string) => {
    setLanes(lanes.filter((lane) => lane.id !== laneId));
  };

  const handleAddTask = (task: Omit<Task, "id">) => {
    const newTask: Task = {
      ...task,
      id: `task-${Date.now()}`,
    };
    setLanes(
      lanes.map((lane) =>
        lane.id === "todo" ? { ...lane, tasks: [...lane.tasks, newTask] } : lane
      )
    );
    setIsAddingTask(false);
  };

  const handleEditTask = (editedTask: Task) => {
    setLanes(
      lanes.map((lane) => ({
        ...lane,
        tasks: lane.tasks.map((task) =>
          task.id === editedTask.id ? editedTask : task
        ),
      }))
    );
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId: string) => {
    setLanes(
      lanes.map((lane) => ({
        ...lane,
        tasks: lane.tasks.filter((task) => task.id !== taskId),
      }))
    );
  };

  return (
    <div className="min-h-screen ">
      <ProjectHeader
        project={project}
        onAddTask={() => setIsAddingTask(true)}
      />
      <div className="min-w-full min-h-full mx-auto py-3 dark:bg-transparent dark:text-white ">
        <DragDropContext onDragEnd={onDragEnd}>
          <KanbanBoard
            lanes={lanes}
            onAddLane={() => setIsAddingLane(true)}
            onDeleteLane={handleDeleteLane}
            onEditTask={setEditingTask}
            onDeleteTask={handleDeleteTask}
          />
        </DragDropContext>
      </div>
      {isAddingLane && (
        <AddLaneForm
          onSubmit={handleAddLane}
          onCancel={() => setIsAddingLane(false)}
        />
      )}
      {isAddingTask && (
        <AddTaskForm
          onSubmit={handleAddTask}
          onCancel={() => setIsAddingTask(false)}
        />
      )}
      {editingTask && (
        <EditTaskForm
          task={editingTask}
          onSubmit={handleEditTask}
          onCancel={() => setEditingTask(null)}
        />
      )}
    </div>
  );
}
