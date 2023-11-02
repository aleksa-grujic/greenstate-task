import { FC } from "react";
import styles from "./Tasks.module.css";
import { TasksProps } from "./Tasks.types";
import TaskCard from "../TaskCard/TaskCard";
import { Icon } from "../../Atoms";

const Tasks: FC<TasksProps> = ({ tasks, loading, onDelete, onEdit, count }) => {
  if (loading)
    return (
      <div className={styles.loadingContainer}>
        <Icon icon="loading" color="#7E44F8" width={100} height={100} />
      </div>
    );
  return (
    <div className={styles.container}>
      {tasks.map((task) => (
        <TaskCard
          task={task}
          key={task.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default Tasks;
