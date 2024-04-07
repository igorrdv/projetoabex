import React from "react";
import Header from "./Header";
import criancas from "../../images/criancas.jpg";
import styles from "../components/Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.frase}>Doe Para Fazer A Diferença</h1>
        <button>Quero Doar</button>
        <button>Entrar em Contato</button>
      </div>
    </>
  );
};

export default Home;
