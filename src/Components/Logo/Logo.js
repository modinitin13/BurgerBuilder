import React from 'react'
import burgerLogo from '../../Assests/Images/burgerLogo.png'
import classes from './Logo.module.css'
const Logo = () =>{
    return(
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="MyBurger"/>
        </div>
    )
}
export default Logo