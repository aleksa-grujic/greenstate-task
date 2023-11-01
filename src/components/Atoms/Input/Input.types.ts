import { ChangeEventHandler } from "react";

export type InputProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
};
