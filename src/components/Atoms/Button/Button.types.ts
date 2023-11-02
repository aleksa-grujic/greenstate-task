export type ButtonProps = {
  size?: "small" | "medium" | "large" | "xlarge";
  txtVisible?: boolean;
  text: string;
  leftIcon?: "validate" | "loading" | "delete" | "edit" | "log out";
  rightIcon?: "validate" | "loading" | "delete" | "edit" | "log out";
  lToggle?: boolean;
  rToggle?: boolean;
  type?: "button" | "submit" | "reset";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
};
