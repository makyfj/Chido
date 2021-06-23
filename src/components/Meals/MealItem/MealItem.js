import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cartContext";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>$ {price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
