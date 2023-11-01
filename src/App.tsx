import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Atoms/Input/Input";
import Button from "./components/Atoms/Button/Button";
import Chip from "./components/Atoms/Chip/Chip";

function App() {
  const [text, setText] = React.useState("");
  return (
    <div className="App">
      <Input
        label="test"
        placeholder="test"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        text="test123"
        onClick={() => console.log("click")}
        leftIcon="loading"
        size="medium"
      />
      <Chip type="High" size="small" />
    </div>
  );
}

export default App;
