import React from "react";
import chidoMealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Chido Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={chidoMealsImage} alt="Chido Meals - Delicious Food" />
      </div>
    </>
  );
};

export default Header;
