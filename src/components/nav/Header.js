import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { leftNav, logo, logout } from "../helper/Helper";
import styles from "./Header.module.scss";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_USER, SET_ACTIVE_USER } from "../../redux/slice/authSlice";

const Header = () => {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.displayName);

        if (user.displayName == null) {
          const emailName = user.email.slice(0, -10);
          const u1 = emailName.charAt(0).toUpperCase() + emailName.slice(1);
          setCurrentUser(u1);
        }
        dispatch(
          SET_ACTIVE_USER({
            userName: user.displayName ? user.displayName : currentUser,
            userId: user.uid,
            email: user.email,
          })
        );
      } else {
        setCurrentUser("");
        dispatch(REMOVE_USER());
      }
    });
  }, [currentUser, dispatch]);

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
              <div className={styles.logoClose}>
                {logo}{" "}
                <FaTimes
                  size={30}
                  className={styles.close}
                  onClick={hideMenu}
                />
              </div>
              <li className={styles.liStyles}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["link-list-active"]}`
                      : `${styles["link-list"]}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.liStyles}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["link-list-active"]}`
                      : `${styles["link-list"]}`
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className={styles.liStyles}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["link-list-active"]}`
                      : `${styles["link-list"]}`
                  }
                  to="/orders"
                >
                  OrdersHistory
                </NavLink>
              </li>
              <li className={styles.liStyles}>
                <Link to="#">
                  <FaUserCircle /> Hi, {currentUser}
                </Link>
              </li>
              {loggedIn && (
                <li className={styles.liStyles}>
                  <Link to="/" onClick={logout}>
                    logOut
                  </Link>
                </li>
              )}
              {!loggedIn && (
                <>
                  <li className={styles.liStyles}>
                    <Link to="/login" onClick={logout}>
                      login
                    </Link>
                  </li>
                  <li className={styles.liStyles}>
                    <Link to="/register" onClick={logout}>
                      register
                    </Link>
                  </li>
                </>
              )}
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
