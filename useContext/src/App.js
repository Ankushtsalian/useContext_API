import "./styles.css";
import Login from "./Login";
import User from "./User";
import React, { useState, createContext } from "react";
export const appContext = createContext(null);
export default function App() {
  const [input, setInput] = useState("");
  return (
    <appContext.Provider value={{ input, setInput }}>
      <Login />
      <User />
    </appContext.Provider>
  );
}
