import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Modal from "../../Components/UI/Modal/Modal";
const INGREDIENT_PRICE = {
  cheese: 15,
  salad: 7,
  bacon: 20,
  meat: 25,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 20,
    purchasable: false,
    purchasing: false,
  };
  updatePurchasable = (ingredients) => {
    const temp = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);
    this.setState({ purchasable: temp > 0 });
  };
  addIngredientHandler = (type) => {
    const tempIngredients = { ...this.state.ingredients };
    tempIngredients[type] += 1;
    const tempPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    this.setState({ ingredients: tempIngredients, totalPrice: tempPrice });
    this.updatePurchasable(tempIngredients);
  };
  removeIngredientHandler = (type) => {
    const tempIngredients = { ...this.state.ingredients };
    tempIngredients[type] -= 1;
    const tempPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState({ ingredients: tempIngredients, totalPrice: tempPrice });
    this.updatePurchasable(tempIngredients);
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  cancelHandler = () => {
    this.setState({ purchasing: false });
  };
  continueHandler = () => {
    alert("You continue to purchase");
  };
  render() {
    let disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} cancelled={this.cancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.cancelHandler}
            continue={this.continueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
