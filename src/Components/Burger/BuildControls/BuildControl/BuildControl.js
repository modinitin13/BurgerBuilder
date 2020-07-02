import React from "react";
import classes from "./BuildControl.module.css";
const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div>{props.label}</div>
      <button className={classes.Less} disabled={props.diasbledVal} onClick={props.removed}>
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};
export default buildControl;
