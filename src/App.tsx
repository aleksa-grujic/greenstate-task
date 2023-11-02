import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Atoms/Input/Input";
import Button from "./components/Atoms/Button/Button";
import Chip from "./components/Atoms/Chip/Chip";
import AppRoutes from "./AppRoutes";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
