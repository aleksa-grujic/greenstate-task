import { FC, useState } from "react";
import AuthForm from "../../components/Organisms/AuthForm/AuthForm";
import useAuth from "../../hooks/useAuth";

const Auth: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const { errors, loading, handleSubmit } = useAuth({
    email,
    password,
    isLogin,
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    if (id === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <AuthForm
      email={email}
      password={password}
      onChange={onChange}
      onSubmit={handleSubmit}
      isLogin={isLogin}
      errors={errors}
      setIsLogin={setIsLogin}
      loading={loading}
    />
  );
};

export default Auth;
