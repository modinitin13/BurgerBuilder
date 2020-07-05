import React, { Component } from "react";
import Aux from "../Auxilary/Auxilary";
import classes from "./Layout.module.css";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
class layout extends Component {
  state = {
    showDrawer: true,
  };
  hideBackdropHandler = () => {
    this.setState({ showDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showDrawer: !prevState.showDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <SideDrawer
          show={this.state.showDrawer}
          hide={this.hideBackdropHandler}
        />
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default layout;
