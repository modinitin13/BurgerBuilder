import React from "react";
import Aux from "../../hoc/Auxilary";
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
      {ingredients}
      <p>Delicious Burgerrrrrr!</p>
      <Button btnType="Success" clicked={props.continue}>ORDER</Button>
      <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
    </Aux>
  );
};
export default OrderSummary;
