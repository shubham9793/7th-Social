import React from "react";
import styles from "./Item.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Item = ({ foodItem, handleBuyButton, bought }) => {
  return (
    <li
      className={`${styles.kgItem} list-group-item ${bought ? "active" : ""}`}
    >
      <span className={styles.kgSpan}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
