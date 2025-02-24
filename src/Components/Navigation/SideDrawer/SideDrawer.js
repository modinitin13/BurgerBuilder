import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Aux from "../../../hoc/Auxilary/Auxilary";
import Backdrop from '../../UI/Backdrop/Backdrop'
const SideDrawer = (props) => {
  let attachedClasses=[classes.SideDrawer,classes.Close]
  if(props.show){
    attachedClasses=[classes.SideDrawer,classes.Open]
  }
  return (
    <Aux>
      <Backdrop show={props.show} cancel={props.hide}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};
export default SideDrawer;
