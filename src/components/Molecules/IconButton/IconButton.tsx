import { FC } from "react";
import styles from "./IconButton.module.css";
import { IconButtonProps } from "./IconButton.types";
import { Icon } from "../../Atoms";

const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  width,
  height,
  color,
  className,
  backgroundColor,
}) => {
  return (
    <div
      className={`${styles.iconButton} ${className}`}
      style={backgroundColor ? { backgroundColor: backgroundColor } : undefined}
      onClick={onClick}
    >
      <Icon icon={icon} width={width} height={height} color={color} />
    </div>
  );
};

export default IconButton;
