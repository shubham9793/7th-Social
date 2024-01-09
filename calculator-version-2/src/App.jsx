import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const res = eval(calVal);
      setCalVal(res);
    } else {
      const newDisplayValu = calVal + buttonText;
      setCalVal(newDisplayValu);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
