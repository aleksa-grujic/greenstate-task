import { FC, MouseEvent, useEffect, useState } from "react";
import styles from "./TaskModal.module.css";
import { TaskModalProps } from "./TaskModal.types";
import { Button, Chip, Icon, Input, Radio } from "../../Atoms";
import { Priority } from "../../../constants/types";

const TaskModal: FC<TaskModalProps> = ({
  task,
  isOpen,
  closeModal,
  onSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("Low");
  const [status, setStatus] = useState(false);
  const isEditMode = !!task;
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
      setStatus(task.done);
    }
  }, [task]);

  const cleanup = () => {
    setTitle("");
    setDescription("");
    setPriority("Low");
    setStatus(false);
  };
  const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    cleanup();
    closeModal();
  };
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onSubmitTask = () => {
    onSubmit({ title, description, priority, done: status });
    cleanup();
    closeModal();
  };
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={handleCloseModal}>
      <div className={styles.container} onClick={onClick}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <Icon icon="edit" width={20} height={20} color="#7B828A" />
          </div>
          <span className={styles.title}>
            {!isEditMode ? "Create Task" : "Edit Task"}
          </span>
        </div>

        {!isEditMode && (
          <span className={styles.subtitle}>
            Please provide the required details to create the task.
          </span>
        )}

        {isEditMode && (
          <>
            <span className={styles.priorityTitle}>Status</span>
            <div className={styles.priority}>
              <Radio active={!status} onClick={() => setStatus(false)} />
              <Chip type="In progress" />
              <Radio active={status} onClick={() => setStatus(true)} />
              <Chip type="Done" />
            </div>
          </>
        )}

        <span className={styles.formTitle}>Task details</span>
        <Input
          label="Task title"
          placeholder="Enter your task title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={undefined}
        />
        <Input
          label="Description"
          placeholder="Enter your task description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={undefined}
          isTextarea={true}
        />
        <span className={styles.priorityTitle}>Priority</span>
        <div className={styles.priority}>
          <Radio
            active={priority === "Low"}
            onClick={() => setPriority("Low")}
          />
          <Chip type="Low" />
          <Radio
            active={priority === "Medium"}
            onClick={() => setPriority("Medium")}
          />
          <Chip type="Medium" />
          <Radio
            active={priority === "High"}
            onClick={() => setPriority("High")}
          />
          <Chip type="High" />
        </div>
        <Button
          size="xlarge"
          text={!isEditMode ? "Create Task" : "Edit Task"}
          onClick={onSubmitTask}
          className={styles.button}
          disabled={title === "" || description === ""}
        />
      </div>
    </div>
  );
};

export default TaskModal;
