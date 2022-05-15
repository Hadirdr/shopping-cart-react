import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Context
import { CartContext } from '../../context/CartContextProvider';
//function
import {  shorten, isInCart, quantityCount } from '../../helper/function';
//Icons
//import trashIcon from "../../assets/icons/trash.svg";

//Style
import styles from "./Product.module.css";

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.Container}>
            <img className={styles.cardImage}src ={productData.image} alt="product" style={{width:"200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id )> 1 && <button onClick={() => dispatch({type:"DECREASE", payload: productData})}>-</button>} 
                    {quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({type:"REMOVE-ITEM", payload: productData})}>R</button>} 
                    {quantityCount(state,productData.id)> 0 && <span className={styles.counter}>{quantityCount(state,productData.id)}</span>} 
                    {
                        isInCart(state,productData.id) ? 
                        <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type:"ADD-ITEM", payload: productData})}>Add to cart</button>
                    }
                </div>
            </div>            
        </div>
    );
};

export default Product;