import { useState } from "react";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import R_image from "../../assets/images/register1.jpg";
import styles from "./Auth.module.scss";
import { auth } from "../../firebase/config";
import { Loader } from "../../components/loader/Loader";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success("Login successfully");
        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  //login with google
  const provider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    toast.success("Login Successfully");
    navigate("/");
  }).catch((error) => {
    // Handle Errors here
    toast.error(error.message);
  });
  }

  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <section className={styles.container}>
        <div className={styles["img-div"]}>
          <img
            src={R_image}
            alt="registration_image"
            className={styles["R-img"]}
          />
        </div>
        <div className={styles["form-div"]}>
          <h1 className={styles["login-title"]}>Login</h1>
          <form className={styles.form} onSubmit={handleLogin}>
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
            <button className={styles["login-btn"]} type="submit">
              login
            </button>
            <div>
              <Link to="/reset">Reset password</Link>
            </div>
            <p>--- or ---</p>
            <button className={styles["login-btn-g"]} type="button" onClick={loginWithGoogle}>
              <FaGoogle /> login With Google
            </button>
            <div>
              <p>
                Dont have an account yet?
                <Link to="/register" style={{ color: "blue" }}>
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
