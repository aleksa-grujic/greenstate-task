import { Task } from "../../../constants/types";

export type TasksProps = {
  tasks: Task[];
  count: number;
  loading: boolean;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
};
