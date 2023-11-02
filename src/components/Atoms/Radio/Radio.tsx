import { FC } from "react";
import { RadioProps } from "./Radio.types";
import styles from "./Radio.module.css";

const Radio: FC<RadioProps> = ({ active, disabled, error, onClick }) => {
  return (
    <div
      className={`${styles.radio} ${active ? styles.active : ""} ${
        error ? styles.error : ""
      }  ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
    >
      {active && <div className={styles.activeRadio} />}
    </div>
  );
};

export default Radio;
