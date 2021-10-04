import React from 'react';
import {
    AppBar,
    Toolbar,
    Avatar,
    CssBaseline,
    Typography,
    LinearProgress,
} from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from "react";
import '../Shop/Shop.scss';
import Cart from "../Cart";
import * as api from 'src/utils/apiUtil';

const theme = createTheme();

const Shop = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const productData = [{"productId":1,"productName":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","amount":10,"price":109},{"productId":2,"productName":"Mens Casual Premium Slim Fit T-Shirts","amount":5,"price":22},{"productId":3,"productName":"Mens Cotton Jacket","amount":1,"price":55}]
    
    const getCartData = async () => {
            setIsLoading(true);
            const userId = localStorage.getItem("userId");
            try {
                const cartRes =await api.getCartInfo(userId);
                if (cartRes.status === 200) {
                    setCartItems(cartRes.data);
                    setIsLoading(false);
                }
            } catch (error) {
                if (error.response.status === 400) {
                    alert('no data');
                }
            }
        }

    useEffect(() => {
       
        // setCartItems(productData);
        getCartData();
        
    },[])

    const handleAddToCart = async (clickedItem) => {
        setCartItems((prev) => {
        const isItemInCart = prev.find((item) => item.productId === clickedItem.productId);
        if (isItemInCart) {
            return prev.map((item) =>
            item.productId === clickedItem.productId
                ? { ...item, amount: item.amount + 1 }
                : item
            );
        }
            return [...prev, { ...clickedItem, amount: 1 }];
        });
        
        
        const productId = clickedItem.productId;
        const amount = clickedItem.amount + 1;
        console.log(productId, amount)
        const userId = localStorage.getItem("userId");
        try {
            const updateRes = await api.updateItemAmount({ userId, productId, amount });
            if (updateRes.status === 200) {
                console.log('update success');
            }
        } catch (error) {
            if (error.response.status === 400) {
                alert('update failed');
            }
        }
    };

    const handleRemoveFromCart =async (id) => {
        setCartItems((prev) =>
            prev.reduce((acc, item) => {
                if (item.productId === id) {
                if (item.amount === 1) return acc;
                return [...acc, { ...item, amount: item.amount - 1 }];
                } else {
                return [...acc, item];
                }
            }, [])
        );
        const data = cartItems.find((item) => item.productId === id )
        const productId = data.productId;
        const amount = data.amount - 1;
        console.log(productId, amount)
        const userId = localStorage.getItem("userId");
        if (amount === 0) {
            try {
                const deleteRes =await api.removeItemFromCart({ userId, productId });
                if (deleteRes.status === 200) {
                    console.log('remove success');
                }
            } catch (error) {
                alert('remove failed');
            }
        } else {
            try {
                const updateRes =await api.updateItemAmount({ userId, productId, amount });
                if (updateRes.status === 200) {
                    console.log('update success');
                }
            } catch (error) {
                if (error.response.status === 400) {
                    alert('update failed');
                }
            }
        }
        
    };

    if (isLoading) return <LinearProgress />;

    return (
        <ThemeProvider theme={theme}>
        <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{
                position: 'relative',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
            >
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                <AppleIcon />          
                </Avatar>
                </Typography>
            </Toolbar>
            </AppBar>
        <div className="shop">
            <Cart
                cartItems={cartItems}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
            />
        </div>
        </ThemeProvider>

    );
}

export default Shop;



