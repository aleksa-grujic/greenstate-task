import { useContext, useState } from "react";
import { login, register } from "../api/auth";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = ({
  email,
  password,
  isLogin,
}: {
  email: string;
  password: string;
  isLogin: boolean;
}) => {
  const { login: handleLogin } = useContext(AuthContext);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = async () => {
    setLoading(true);
    const isValidEmail = validateEmail(email);
    const isValidPassword = password.length > 5;
    if (!isValidEmail) {
      setErrors({ ...errors, email: "Please enter a valid email" });
    }
    if (!isValidPassword) {
      setErrors({
        ...errors,
        password: "Password must be at least 5 characters",
      });
    }
    if (!isValidEmail || !isValidPassword) {
      setLoading(false);
      return;
    }

    if (!isLogin) {
      const registerRes = await register(email, password);
      if (!registerRes.success) {
        setErrors({ ...errors, general: registerRes.error as string });
        setLoading(false);
        return;
      }
    }
    const loginRes = await login(email, password);
    if (!loginRes.success) {
      setErrors({ ...errors, general: loginRes.error as string });
      setLoading(false);
      return;
    }
    handleLogin(loginRes.data.accessToken);
    setLoading(false);
  };

  return {
    handleSubmit,
    errors,
    loading,
  };
};

export default useAuth;
