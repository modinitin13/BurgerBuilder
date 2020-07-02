import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
const buildControls = (props) => {
  let controls = [
    { label: "Cheese", type: "cheese" },
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" }
  ];
  return (
    <div className={classes.BuildControls}>
      <p>
        Current price: <strong>{props.price}</strong>
      </p>
      {controls.map((x) => (
        <BuildControl
          key={x.label}
          label={x.label}
          added={() => props.addIngredient(x.type)}
          diasbledVal={props.disabledInfo[x.type]}
          removed={() => props.removeIngredient(x.type)}
        />
      ))}
      <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>
        ORDER NOW
      </button>
    </div>
  );
};
export default buildControls;
