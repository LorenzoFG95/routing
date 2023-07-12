import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DefaultLayout = ({ children }) => {
  // const linksIn = [
  //   {
  //     id: 1,
  //     name: "Homepage",
  //     value: "/",
  //   },
  //   {
  //     id: 2,
  //     name: "About",
  //     value: "/about",
  //   },
  //   {
  //     id: 3,
  //     name: "Login",
  //     value: "/login",
  //   },
  // ];
  // const linksOut = [
  //   {
  //     id: 1,
  //     name: "Homepage",
  //     value: "/",
  //   },
  //   {
  //     id: 2,
  //     name: "About",
  //     value: "/about",
  //   },
  //   {
  //     id: 3,
  //     name: "Dashboard",
  //     value: "/dashboard",
  //   },
  //   {
  //     id: 4,
  //     name: "Logout",
  //     value: "/logout",
  //   },
  // ];

  const [isLogged, setLogged] = useState();
  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("logged")));
  }, [isLogged]);
  console.log(isLogged);

  const onHandleLogout = () => {
    setLogged(false);
    localStorage.setItem("logged", false);
    window.location.reload;
  };
  return (
    <>
      <div className={styles.header}>
        <ul>
          {!isLogged ? (
            <>
              {" "}
              <li>
                <Link className={styles.link} to="/">
                  Homepage
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/login">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <Link className={styles.link} to="/">
                  Homepage
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/dashboard">
                  Dashboard
                </Link>
              </li>{" "}
              <li onClick={onHandleLogout}>Logout</li>
            </>
          )}
        </ul>
      </div>
      {children}
      <div className={styles.footer}>
        <p>Made by Lorenzo Fraterrigo Garofalo</p>
      </div>
    </>
  );
};

export default DefaultLayout;
