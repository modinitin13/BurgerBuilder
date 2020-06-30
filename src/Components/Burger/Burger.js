import React from "react";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import classes from "./Burger.module.css";
const burger = (props) => {
  const transformedIngredients1 = Object.keys(props.ingredients).map(
    igKeys => {
      return [...Array(props.ingredients[igKeys])].map((_,i)=>{
          return <BurgerIngredients key={`${igKeys}${i}`} type={igKeys} />
      })
    }
  );
  console.log(transformedIngredients1)
// const transformedIngredients=null
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients1}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};
export default burger;
