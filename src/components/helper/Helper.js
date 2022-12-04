import { signOut } from "firebase/auth";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { auth } from "../../firebase/config";
import styles from "../nav/Header.module.scss";



export const logout =()=> {
  signOut(auth).then(() => {
  toast.success("Logout successfully..")
  }).catch((error) => {
    toast.error(error.message);
  });
}

const logo = (
  <div className={styles["logo-div"]}>
  <h1 className={styles.logo}>
    <Link to="/" className={styles.logo}>
      <span className={styles.span}>e</span>Shop
    </Link>
  </h1>
</div>
);



export {logo};