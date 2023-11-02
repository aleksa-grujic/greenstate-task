import { FC } from "react";
import styles from "./Filters.module.css";
import { FiltersProps } from "./Filters.types";
import { Chip, Radio } from "../../Atoms";

const Filters: FC<FiltersProps> = ({ priority, onChange }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Tasks</span>
      <div className={styles.filters}>
        <Radio active={priority === "Low"} onClick={() => onChange("Low")} />
        <Chip type="Low" />
        <Radio
          active={priority === "Medium"}
          onClick={() => onChange("Medium")}
        />
        <Chip type="Medium" />
        <Radio active={priority === "High"} onClick={() => onChange("High")} />
        <Chip type="High" />
      </div>
    </div>
  );
};

export default Filters;
