import React from "react";
import styles from "./Footer.module.css";
import LOGO from "../../images/logogold.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <img src={LOGO} alt="logo" className={styles.logo} />
        <h5 className={styles.camon}>камон</h5>
      </Link>
      <div className={styles.text}>
        developed by{" "}
        <a href="https://t.me/ssjjitt" className={styles.link}>
          ssjjitt
        </a>
      </div>
    </footer>
  );
}

export default Footer;
