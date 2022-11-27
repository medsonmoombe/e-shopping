import React,{ useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import R_image from "../../assets/images/register1.jpg";
import styles from "./Auth.module.scss";
import { Loader } from "../../components/loader/Loader";


export const Register = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [isLoading, setIsLoading] = useState(false);

 
  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(email, password, confirm_password);
    if(password !== confirm_password) {
      toast.error("Password does not match!");
    }
    setIsLoading(true);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    toast.success("User registration successful.")
    setIsLoading(false);
    navigate("/login");

  })
  .catch((error) => {
   toast.error(error.message);
   setIsLoading(false);
  });
  }

  return (
    <>
    <ToastContainer />
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
        <h1 className={styles["login-title"]}>Register</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <input
            className={styles.input}
            type="password_confirmation"
            placeholder="Confirm Password"
            onChange={(e) => setConfirm_password(e.target.value) }
            value={confirm_password}
            required
          />
          <button className={styles["login-btn"]} type="submit">
            Register
          </button>
          <div>
            <p>
              Already have an account?
              <Link to="/login" style={{ color: "blue" }}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
    </>
  );
};
