// src/contexts/AuthContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  FC,
  ReactNode,
} from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  isLoggedIn: boolean;
  logout: () => void;
  login: (token: string) => void;
}

const defaultValue: AuthContextProps = {
  isLoggedIn: false,
  logout: () => {},
  login: (token: string) => {},
};

export const AuthContext = createContext<AuthContextProps>(defaultValue);

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  const login = (token: string) => {
    localStorage.setItem("accessToken", token);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
