export type Priority = "High" | "Medium" | "Low";
export type Task = {
  id: string;
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  priority: Priority;
};
