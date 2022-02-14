import React, { useContext } from "react";
import { appContext } from "./App";
function Login() {
  const { setInput } = useContext(appContext);
  return (
    <div>
      <input onChange={(event) => setInput(event.target.value)} />
    </div>
  );
}
export default Login;
