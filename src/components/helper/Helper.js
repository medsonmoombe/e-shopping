import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../nav/Header.module.scss";

const leftNav = (
    <ul className={styles["left-div"]}>
      <li className={styles.liStyles}>
        <Link to="#">logOut</Link>
      </li>
      <li className={styles.liStyles}>
        <Link className={styles["link-logs"]} to="/">
          Cart
          <FaShoppingCart size={20} />
          <p className={styles["cart-num"]}>0</p>
        </Link>
      </li>
    </ul>
);

const logo = (
  <div className={styles["logo-div"]}>
  <h1 className={styles.logo}>
    <Link to="/" className={styles.logo}>
      <span className={styles.span}>e</span>Shop
    </Link>
  </h1>
</div>
);

export {logo,leftNav};