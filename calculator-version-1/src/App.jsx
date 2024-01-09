import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonContainer";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display />
        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;
