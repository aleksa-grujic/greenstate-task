export type AuthFormProps = {
  email: string;
  password: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
  isLogin: boolean;
  errors: {
    email: string;
    password: string;
    general: string;
  };
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};
