export interface Project {
  id: string;
  name: string;
  dateAdded: string;
  deadline: string;
  participants: string[];
  description: string;
  totalTasks: number;
  doneTasks: number;
  frozenTasks: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  dueDate: string;
  assignee: string;
  tags: string[];
}

export interface Lane {
  id: string;
  title: string;
  tasks: Task[];
}
