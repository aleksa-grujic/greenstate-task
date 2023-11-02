import Auth from "./pages/Auth/Auth";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard/Dashboard";

const AppRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Dashboard />}
    </>
  );
};

export default AppRoutes;
