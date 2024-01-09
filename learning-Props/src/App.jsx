import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItem from "./components/FoodItem";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [textToShow, setTextToShow] = useState("");
  let [foodItems, setFoodItems] = useState(["Dal", "Green Vegetable", "Roti"]);
  let [errorMess, setErrorMsg] = useState("");
  let [selectedItem, setSelectedItem] = useState([]);

  const handleOnChange = (event) => {
    setTextToShow(event.target.value);
    setErrorMsg("");
  };

  const handleOnClick = (event) => {
    if (textToShow.trim() === "") {
      setErrorMsg("Input can not be empty.Please enter a valid food item.");
      return;
    }
    let newItem = textToShow;
    event.target.value = "";
    let newArrayItem = [...foodItems, newItem];
    console.log("Button clicked", newArrayItem);
    setFoodItems(newArrayItem);

    setTextToShow("");
  };

  const handleOnEnter = (event) => {
    if (event.key === "Enter" || event.keyCode === 13 || event.which === 13) {
      if (textToShow.trim() === "") {
        setErrorMsg("Input can not be empty.Please enter a valid food item.");
        return;
      }
      console.log(event);
      let newFoodItem = textToShow;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      setTextToShow("");
    }
  };

  const handleBuyButton = (event) => {
    console.log(event);
  };

  return (
    <>
      <Container>
        <h1 className="foodHeading">Helthy Food</h1>
        <ErrorMessage items={foodItems} />
        <FoodItem items={foodItems} handleBuyButton={handleBuyButton} />
        <span>{textToShow}</span>
        <br />

        <FoodInput
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          handleOnEnter={handleOnEnter}
        />
        {errorMess && <p className="errormsg">{errorMess}</p>}
      </Container>

      <Container>
        <h1>this is the below of the container.</h1>
      </Container>
    </>
  );
}

export default App;
