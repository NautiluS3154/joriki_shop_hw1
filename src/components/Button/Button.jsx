import React from "react";
import './Button.css';
import image from '../../assets/Button_img/shopping-cart.png'

const Button = (props) =>{
    const {titleBtn} = props
    return(
        <button className="button">
            {titleBtn}
            <img src={image} alt="" className="btn_img" />
        </button>
    )
}
export default Button;