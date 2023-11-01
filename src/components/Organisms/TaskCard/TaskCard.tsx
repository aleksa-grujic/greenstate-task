import { FC } from "react";
import { TaskCardProps } from "./TaskCard.types";
import styles from "./TaskCard.module.css";
import { Chip } from "../../Atoms";

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{task.title}</h3>
        <Chip type={task.done ? "Done" : "In progress"} />
      </div>
      <p className={styles.description}>{task.description}</p>
      <div className={styles.footer}>
        <span className={styles.priority}>
          Priority <Chip type={task.priority} size="small" />
        </span>
        <span className={styles.icons}>ikonice</span>
      </div>
    </div>
  );
};

export default TaskCard;
