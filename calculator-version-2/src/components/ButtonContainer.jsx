import { useState } from "react";
import styles from "./Button.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonName.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() =>onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
