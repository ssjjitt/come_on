import React from "react";
import "../App.css";
import { Button } from "./Button";
import styles from "./LandingSection.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>collection</div>
      <div className={styles.buttons}>
        <Button
          className={styles.bttn}
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/collection"
        >
          <div className={styles.btntext}>collection</div>
        </Button>
        <Button
          className={styles.bttn}
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/wishlist"
        >
          <div className={styles.btntext}>wishlist</div>
        </Button>
        <Button
          className={styles.bttn}
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/search"
        >
          <div className={styles.btntext}>add more</div>
        </Button>
      </div>
    </div>
  );
}

export default Banner;
