import React, { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css";
import logo from "../../images/icon.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      sessionStorage.setItem("userId", id);
      console.log("Usuário logado com sucesso:");
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
    }
  };

  React.useEffect(() => {
    const storedUserId = sessionStorage.getItem("Id");
    console.log("Stored userId:", storedUserId);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <img src={logo} className={styles.img} />
        <h2>Entrar</h2>
        <p>Email</p>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p>Senha</p>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </>
  );
};

export default Login;
