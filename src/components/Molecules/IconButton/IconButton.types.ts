export type IconButtonProps = {
  icon: "validate" | "loading" | "delete" | "edit" | "log out";
  width?: number;
  height?: number;
  color?: string;
  onClick?: () => void;
  backgroundColor?: string;
  className?: string;
};
