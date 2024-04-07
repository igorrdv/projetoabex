import React from "react";
import axios from "axios";
import styles from "./Register.module.css";
import logo from "../../images/icon.png";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:3000/register", {
        name,
        email,
        password,
        phone,
      });
      console.log("Usuário registrado com sucesso");
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
    }
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className={styles.img} />
      <h2 style={{ display: "flex", alignItems: "center" }}>Crie sua conta</h2>
      <p>Nome</p>
      <input
        type="text"
        placeholder="Informe seu nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>Email</p>
      <input
        type="email"
        placeholder="Informe seu Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>Senha</p>
      <input
        type="password"
        placeholder="Crie sua senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <p>Telefone</p>
      <input
        type="tel"
        placeholder="Informe seu número de telefone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <button onClick={handleRegister}>Cadastre-se</button>
    </div>
  );
};

export default Register;
