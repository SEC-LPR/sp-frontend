import React from 'react';
import { LinearProgress } from '@mui/material';
import { useState, useEffect } from "react";
import '../Shop/Shop.scss';
import Cart from "../Cart";

const Shop = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const productData = 
    [
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "amount": 10,
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "amount": 2,
        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "amount": 1,
        },
    ]

    useEffect(() => {
        setIsLoading(true);
        setCartItems(productData);
        setIsLoading(false);
    },[])

    const handleAddToCart = (clickedItem) => {
        setCartItems((prev) => {
        const isItemInCart = prev.find((item) => item.id === clickedItem.id);
        if (isItemInCart) {
            return prev.map((item) =>
            item.id === clickedItem.id
                ? { ...item, amount: item.amount + 1 }
                : item
            );
        }
            return [...prev, { ...clickedItem, amount: 1 }];
        });
        
        
        const productId = clickedItem.id;
        const amount = clickedItem.amount + 1
        // const userId = localStorage.getItem("userId");
        // add update axios call here
    };

    const handleRemoveFromCart = (id) => {
        setCartItems((prev) =>
            prev.reduce((acc, item) => {
                if (item.id === id) {
                if (item.amount === 1) return acc;
                return [...acc, { ...item, amount: item.amount - 1 }];
                } else {
                return [...acc, item];
                }
            }, [])
        );
        const data = cartItems.find((item) => item.id === id )
        const productId = data.id;
        const amount = data.amount - 1;
        // const userId = localStorage.getItem("userId");
        // add update axios call here

    };

    if (isLoading) return <LinearProgress />;

    return (
        <div className="shop">
            <Cart
                cartItems={cartItems}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
            />
        </div>
    );
}

export default Shop;



