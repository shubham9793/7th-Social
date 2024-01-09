import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange, handleOnClick, handleOnEnter }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item here"
        className={styles.foodInput}
        onChange={handleOnChange}
        onKeyDown={handleOnEnter}
      />
      <br />
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleOnClick}
      >
        Add
      </button>
    </>
  );
};
export default FoodInput;
