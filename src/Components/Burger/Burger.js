import React from "react";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import classes from "./Burger.module.css";
const burger = (props) => {
  let transformedIngredients1 = Object.keys(props.ingredients).map(
    igKeys => {
      return [...Array(props.ingredients[igKeys])].map((_,i)=>{
          return <BurgerIngredients key={`${igKeys}${i}`} type={igKeys} />
      })
    }
  ).reduce((arr,element)=>{
    return arr.concat(element)
  },[]);
  if(transformedIngredients1.length===0)
  {
    transformedIngredients1=<div>Please start adding ingredients</div>
  }
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
