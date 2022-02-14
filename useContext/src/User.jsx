import React, { useContext } from "react";
import { appContext } from "./App";

function User() {
  const { input } = useContext(appContext);

  return <h1>{input}</h1>;
}
export default User;
