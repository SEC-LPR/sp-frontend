import React from 'react';
import { Badge, Drawer, Grid, LinearProgress } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState, useEffect } from "react";
import '../Shop/Shop.scss';
import Product from "../Products";
import Cart from "../Cart";

const Shop = () => {
    // const [cartOpen, setCartOpen] = useState(false);
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

    // const getTotalItems = (items) =>
    //     items.reduce((acc, item) => acc + item.amount, 0);

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
    };

    if (isLoading) return <LinearProgress />;

    return (
        <div className="shop">
            {/* <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}> */}
        <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
        />
        {/* </Drawer> */}

        {/* <IconButton className="iconButton" onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCart />
            </Badge>
        </IconButton> */}

        {/* <Grid container spacing={3}>
            {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
                <Product item={item} handleAddToCart={handleAddToCart} />
            </Grid>
            ))}
        </Grid> */}
        </div>
    );
}

export default Shop;



