import React from "react";
import Register from "./Register";
import styles from "./LoginPage.module.css";

const RegisterPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <Register />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
