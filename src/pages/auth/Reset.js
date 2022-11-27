import React from 'react'
import { Link } from 'react-router-dom';
import R_image from "../../assets/images/reset.png";
import styles from "./Auth.module.scss";

const Reset = () => {
  return (
    <section className={styles.container}>
    <div className={styles["img-div"]}>
      <img
        src={R_image}
        alt="registration_image"
        className={styles["R-img"]}
      />
    </div>
    <div className={styles["form-div"]}>
      <h1 className={styles["login-title"]}>Reset Password</h1>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="reset_password"
          placeholder="Enter email "
          required
        />
        <button className={styles["login-btn"]} type="submit">
          Reset
        </button>
        <div>
          <p className={styles["reset-links"]}>
            <Link to="/login" style={{ color: "blue" }}>
              Login
            </Link>
            <Link to="/register" style={{ color: "blue" }}>
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  </section>
  )
}

export default Reset