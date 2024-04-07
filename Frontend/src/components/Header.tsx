import React from "react";
import img from "../../images/ong.png";
import styles from "./Header.module.css";
import busca from "../../images/busca.png";

const Header = () => {
  return (
    <>
      <nav className={styles.header}>
        <img src={img} alt="Logo" className={styles.logo} />
        <img src={busca} alt="busca" className={styles.busca} />
        <ul className={styles.headerRight}>
          <a href="/"> Página Inicial</a>
          <a> Doações</a>
          <a href="/eventos"> Eventos</a>
          <a> Contato</a>
        </ul>
      </nav>
    </>
  );
};

export default Header;
