import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//Components
import Cart from './shared/Cart';
//Context
import { CartContext } from '../context/CartContextProvider';
//style
import styles from "./ShopCart.module.css";

const ShopCart = () => {

    const {state,dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payment}>
                <p><span>Total Items:</span>{state.itemsCounter}</p>
                <p><span>Total payment:</span>{state.Total}</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.checkout}onClick={() => dispatch({type:"CHECKOUT"})}>Checkout</button>
                    <button className={styles.clear} onClick={() => dispatch({type:"CLEAR"})}>Clear</button>
                </div>
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checkout successfuly</h3>
                    <Link to="/products">Buy more</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>want to buy?</h3>
                    <Link to="/products">Go to Shop</Link>
                </div> 
            }
        </div>
    );
};

export default ShopCart;