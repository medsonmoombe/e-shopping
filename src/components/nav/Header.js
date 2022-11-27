import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { leftNav, logo } from "../helper/Helper";
import styles from "./Header.module.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
    <>
      <header>
        <nav className={styles["nav-bar"]}>
          {logo}
          <div
            className={
              showMenu ? `${styles["mobile-div"]}` : `${styles["div-nav"]}`
            }
          >
            <ul className={styles["list-container"]}>
              <div className={styles.logoClose}>{logo} <FaTimes size={30} className={styles.close} onClick={hideMenu}/></div>
              <li className={styles.liStyles}>
                <NavLink className={({isActive})=> (isActive ? `${styles["link-list-active"]}` : `${styles["link-list"]}`)} to="/">
                  Home
                </NavLink>
              </li>
              <li className={styles.liStyles}>
                <NavLink className={({isActive})=> (isActive ? `${styles["link-list-active"]}` : `${styles["link-list"]}`)} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className={styles.liStyles}>
                <NavLink className={({isActive})=> (isActive ? `${styles["link-list-active"]}` : `${styles["link-list"]}`)} to="/orders">
                  OrdersHistory
                </NavLink>
              </li>
            </ul>
            {leftNav}
          </div>
          <button className={styles.humbBtn}>
            <FaBars size={30} className={styles.humb} onClick={toggleMenu} />
          </button>
        </nav>
        <div onClick={hideMenu}></div>
      </header>
    </>
  );
};

export default Header;
