import React from "react";
import Register from "./Register";
import styles from "./LoginPage.module.css";
import Login from "./Login";

const LoginPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
