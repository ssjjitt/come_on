import React from "react";
import LOGO from "../../images/logogold.svg";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={LOGO} alt="logo" className={styles.logo} />
        <h5 className={styles.text}>камон</h5>
      </Link>
    </header>
  );
}

export default Header;
