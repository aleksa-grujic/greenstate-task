type Task = {
  id: string;
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  priority: "High" | "Medium" | "Low";
};

export type TaskCardProps = {
  task: Task;
};
