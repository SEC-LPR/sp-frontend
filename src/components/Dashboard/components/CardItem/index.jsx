import React from 'react';
import { Button } from '@mui/material';
import '../CardItem/CardItem.scss'

const CartItem = ({ item, amount, addToCart, removeFromCart }) => {

    return (
        <div className="cardItem">
            {amount === 0
                ||
                <div className="item">
                    <h3>{item.productName}</h3>
                    <div className="information">
                        <p>Price: ${item.price}</p>
                        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                    </div>
                    <div className="buttons">
                        <Button
                            size="small"
                            disableElevation
                            variant="contained"
                            onClick={() => removeFromCart(item.productId)}
                        >
                            -
                        </Button>
                        <p>{item.amount}</p>
                        <Button
                            size="small"
                            disableElevation
                            variant="contained"
                            onClick={() => addToCart(item)}
                        >
                            +
                        </Button>
                    </div>
                </div>
            }         
        </div>
    );
};

export default CartItem;
