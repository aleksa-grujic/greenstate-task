import { FC } from "react";
import styles from "./EmptySection.module.css";
import { EmptySectionProps } from "./EmptySection.types";
import { Button } from "../../Atoms";

const EmptySection: FC<EmptySectionProps> = ({ createTask }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Nothing here yet!</span>
      <span className={styles.subtitle}>There are no tasks created</span>
      <Button
        text="Create Task"
        size="medium"
        onClick={createTask}
        className={styles.button}
      />
    </div>
  );
};

export default EmptySection;
