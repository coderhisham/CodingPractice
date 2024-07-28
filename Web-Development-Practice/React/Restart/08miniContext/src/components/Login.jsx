import { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="Enter username"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "none",
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter password"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          margin: "0 5px",
        }}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
