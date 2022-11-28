import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import R_image from "../../assets/images/reset.png";
import { Loader } from '../../components/loader/Loader';
import { auth } from '../../firebase/config';
import styles from "./Auth.module.scss";

const Reset = () => {

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword =(e) => {
  e.preventDefault()
  setIsLoading(true)
  sendPasswordResetEmail(auth, email)
  .then(() => {
   toast.success("reset link sent to your email");
   setIsLoading(false);
  })
  .catch((error) => {
   toast.error(error.message);
   setIsLoading(false);
  });
  }

  return (
    <>
    {isLoading && <Loader/>}
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
      <form className={styles.form} onSubmit={resetPassword}>
        <input
          className={styles.input}
          type="reset_password"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
  </>
  )
}

export default Reset