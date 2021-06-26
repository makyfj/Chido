import React from "react";
import classes from "./Checkout.module.css";

const Checkout = ({ onCancel }) => {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
      </div>

      <div className={classes.control}>
        <label htmlFor="street">Street: </label>
        <input type="text" id="street" />
      </div>

      <div className={classes.control}>
        <label htmlFor="postalCode">Postal Code: </label>
        <input type="text" id="postalCode" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City: </label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default Checkout;
