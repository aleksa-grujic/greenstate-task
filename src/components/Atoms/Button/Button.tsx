import { FC } from "react";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";
import Icon from "../Icon/Icon";
const Button: FC<ButtonProps> = ({
  size = "medium",
  text,
  type = "button",
  onClick,
  disabled,
  leftIcon,
  rightIcon,
  className,
  rToggle = false,
  lToggle = false,
  txtVisible = true,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${styles.button} ${styles[size]} ${className || ""}`}
    >
      {leftIcon && !lToggle && <Icon icon={leftIcon} />}
      <span
        className={`${styles.buttonText} ${styles[size]} ${
          disabled ? styles.disabled : ""
        }`}
      >
        {txtVisible ? text : ""}
      </span>
      {rightIcon && !rToggle && <Icon icon={rightIcon} />}
    </button>
  );
};

export default Button;
