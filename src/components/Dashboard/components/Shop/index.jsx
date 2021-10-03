import React from 'react';
import { Badge, Drawer, Grid, LinearProgress } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState, useEffect } from "react";
import '../Shop/Shop.scss';
import Product from "../Products";
import Cart from "../Cart";

const Shop = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([])

    const productData = 
    [
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        },
        {
            "id": 4,
            "title": "Mens Casual Slim Fit",
            "price": 15.99,
            "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        },
        {
            "id": 5,
            "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            "price": 695,
            "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        }
    ]

    useEffect(() => {
        setIsLoading(true);
        setData(productData);
        setIsLoading(false);
    },[])

    const getTotalItems = (items) =>
        items.reduce((acc, item) => acc + item.amount, 0);

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
        <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
            <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            />
        </Drawer>

        <IconButton className="iconButton" onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCart />
            </Badge>
        </IconButton>

        <Grid container spacing={3}>
            {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
                <Product item={item} handleAddToCart={handleAddToCart} />
            </Grid>
            ))}
        </Grid>
        </div>
    );
}

export default Shop;



