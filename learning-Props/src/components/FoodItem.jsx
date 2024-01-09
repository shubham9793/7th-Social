import { useState } from "react";
import Item from "./Item";

const FoodItem = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item
          key={index}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={() => onBuyButton(item)}
        />
      ))}
    </ul>
  );
};

export default FoodItem;
