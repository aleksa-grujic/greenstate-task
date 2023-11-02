import { FC } from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.types";
import IconButton from "../IconButton/IconButton";
import { Button } from "../../Atoms";

const Header: FC<HeaderProps> = ({
  showCreateTaskButton = true,
  handleLogout,
  handleCreateTask,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <span className={styles.title}>Dashboard</span>
        {showCreateTaskButton && (
          <Button text="Create Task" size="medium" onClick={handleCreateTask} />
        )}
      </div>
      <div className={styles.logout}>
        <IconButton
          icon="log out"
          width={16}
          height={16}
          color="#FF4242"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Header;
