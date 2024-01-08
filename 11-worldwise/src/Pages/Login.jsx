import { useEffect, useState } from "react";
import styles from "./styles/Login.module.css";
import NavBar from "../Components/NavBar/MainNav/NavBar";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";

export default function Login() {
  const navigate = useNavigate();
  const { login, error, isAuntheticated } = useAuth();
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(() => {
    if (isAuntheticated === true) navigate("/app", { replace: true });
  }, [isAuntheticated, navigate]);

  return (
    <main className={styles.login}>
      <NavBar />
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <p>titulo de logueado{isAuntheticated}</p>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type={"primary"}>Login</Button>
        </div>
        <span className={styles.error}>{error}</span>
      </form>
    </main>
  );
}
