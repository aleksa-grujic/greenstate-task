import React, { FC } from "react";
import { InputProps } from "./Input.types";
import styles from "./Input.module.css";

const Input: FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "rest",
  disabled,
  error,
  className,
}) => {
  return (
    <div>
      <label className={`${styles.label} ${styles[type] ?? ""}`}>{label}</label>
      <input
        className={`${styles.input}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
