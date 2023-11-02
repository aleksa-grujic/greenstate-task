import React, { FC } from "react";
import { InputProps } from "./Input.types";
import styles from "./Input.module.css";

const Input: FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type,
  disabled,
  error,
  name,
  isTextarea,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={5}
        />
      ) : (
        <input
          id={name}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}

      <span className={styles.error}>{error || ""}</span>
    </div>
  );
};

export default Input;
