import React,{useContext} from 'react';
//Context
import { CartContext } from '../../context/CartContextProvider';
//Function
import {shorten} from "../../helper/function.js";
//Style
import styles from "./Cart.module.css";

const Cart = (props) => {

        const {dispatch} = useContext(CartContext);
        const {image,title,price,quantity} = props.data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product"/>
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price}$</p>
            </div>    
            <div className={styles.data}>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity >1 ?
                    <button onClick={() => dispatch({type:"DECREASE",payload:props.data})}>-</button> :
                    <button onClick={() => dispatch({type:"REMOVE-ITEM",payload:props.data})}><i className="bi bi-trash" ></i></button>
                }
                <button onClick={() => dispatch({type:"INCREASE",payload:props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;