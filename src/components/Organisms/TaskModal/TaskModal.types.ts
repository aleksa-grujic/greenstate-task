import { Task } from "../../../constants/types";

export type TaskModalProps = {
  task?: Task;
  isOpen: boolean;
  closeModal: () => void;
  onSubmit: ({
    title,
    description,
    priority,
    done,
  }: {
    title: string;
    description: string;
    priority: string;
    done: boolean;
  }) => void;
};
