import React,{Component} from 'react'
import Aux from '../../hoc/Auxilary'
import Burger from '../../Components/Burger/Burger'
class BurgerBuilder extends Component{
    state={
        ingredients:{
            cheese:5,
            salad:4,
            bacon:3,
            meat:2
        }
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build</div>
            </Aux>
        )
    }
}
export default BurgerBuilder