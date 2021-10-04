import React from 'react';
import { useHistory} from 'react-router-dom';
import { Button } from '@mui/material';
import CartItem from "../CardItem";
import '../Cart/Cart.scss';

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
    const history = useHistory();
    const calculateTotal = (items) => items.reduce((acc, item) => acc + item.amount * item.price, 0);
    const checkout = () => {
        history.push('/checkout')
        const items = [];
        cartItems.map((item, index) => {
            let obj = {
                id: item.id,
                name: item.title,
                amount: item.amount,
                price: item.price,
            }
            items.push(obj)
        })
        localStorage.setItem('items', JSON.stringify(items));
        console.log(items);
    }

    return (
        <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? <p>No items in cart.</p> : null}
        {cartItems.map((item) => (
            <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            />
        ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={checkout}>
                Check out
            </Button>
        </div>
    );
};

export default Cart;