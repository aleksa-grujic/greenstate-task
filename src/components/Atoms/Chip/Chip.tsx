import { FC, useCallback } from "react";
import styles from "./Chip.module.css";

import { ChipProps } from "./Chip.types";

const Chip: FC<ChipProps> = ({ type, size = "default" }) => {
  const getStyle = useCallback(() => {
    switch (type) {
      case "In progress":
      case "Medium":
        return styles.warning;
      case "Done":
      case "Low":
        return styles.success;
      case "High":
        return styles.danger;
      default:
        return styles.warning;
    }
  }, [type]);
  return (
    <div className={`${styles.chip} ${getStyle()} ${styles[size]}`}>{type}</div>
  );
};

export default Chip;
