import React from "react";
import Aux from "../../hoc/Auxilary/Auxilary";
import Button from "../UI/Button/Button";
const OrderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        {igKey} : {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <p>Your Order Summary</p>
      <p>You have a Delicious Burger Now!</p>
      {ingredients}
      <p>
        <strong>TOTAL PRICE: {props.price.toFixed(2)}</strong>
      </p>
      <Button btnType="Success" clicked={props.continue}>
        ORDER
      </Button>
      <Button btnType="Danger" clicked={props.cancel}>
        CANCEL
      </Button>
    </Aux>
  );
};
export default OrderSummary;
