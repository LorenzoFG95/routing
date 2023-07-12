import styles from "./index.module.scss";
import { credentials } from "../../mocks/credentials";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleUsername = (e) => setUsername(e.target.value);
  const onHandlePassword = (e) => setPassword(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      navigate("/dashboard");
      localStorage.setItem("logged", true);
    } else {
      alert("Please insert valid username and password");
    }
    window.location.reload;
  };

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={onHandleUsername}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={onHandlePassword}
          value={password}
        />
        <input type="submit" value="Log in" />
      </form>
      <p>Username: Lorenzo</p>
      <p>Password: Lorenzo!</p>
    </div>
  );
};

export default Login;
