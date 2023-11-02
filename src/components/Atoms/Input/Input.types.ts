export type InputProps = {
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: string;
  name: string;
  isTextarea?: boolean;
};
