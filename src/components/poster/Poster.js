import React from "react";
import styles from "./Poster.module.css";

function Poster() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        На вершинах виниловых волн, в море звуковых переплетений, ты найдешь
        наше музыкальное святилище – камон. Здесь, среди магических штрихов
        мелодий и многогранных аккордов, тебя ждет вдохновение, которое оживляет
        душу.
      </div>
      <div className={styles.img}></div>
    </div>
  );
}

export default Poster;
