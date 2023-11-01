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
  rToggle,
  lToggle,
  txtVisible,
}) => {
  return (
    console.log("icon", leftIcon),
    (
      <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={`${styles.button} ${styles[size]}`}
      >
        {leftIcon && <Icon icon={leftIcon} />}
        <span
          className={`${styles.buttonText} ${styles[size]} ${
            disabled ? styles.disabled : ""
          }`}
        >
          {text}
        </span>
        {rightIcon && <Icon icon={rightIcon} />}
      </button>
    )
  );
};

export default Button;
