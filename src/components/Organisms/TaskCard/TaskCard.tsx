import { FC } from "react";
import { TaskCardProps } from "./TaskCard.types";
import styles from "./TaskCard.module.css";
import { Chip } from "../../Atoms";
import IconButton from "../../Molecules/IconButton/IconButton";

const TaskCard: FC<TaskCardProps> = ({ task, onDelete, onEdit }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{task.title}</h3>
        <Chip type={task.done ? "Done" : "In progress"} />
      </div>
      <span className={styles.description}>{task.description}</span>
      <div className={styles.footer}>
        <span className={styles.priority}>
          Priority <Chip type={task.priority} size="small" />
        </span>
        <span className={styles.icons}>
          <IconButton
            icon="edit"
            onClick={() => {
              onEdit(task);
            }}
            width={24}
            height={24}
            color="#FFFFFF"
            backgroundColor="#C9D2DE"
            className={styles.iconButton}
          />
          <IconButton
            icon="delete"
            onClick={() => {
              onDelete(task.id);
            }}
            color="#FF4242"
            width={24}
            height={24}
            backgroundColor="rgba(255, 66, 66, 0.10)"
            className={styles.iconButton}
          />
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
