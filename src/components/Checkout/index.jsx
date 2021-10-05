import React, {useState} from 'react';
import {
    Link,
    useHistory,
} from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Container,
    Avatar,
    Button,
    CssBaseline,
    Paper,
    Box,
    Divider,
    Typography,
} from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PaymentForm from './components/PaymentForm';
import Review from './components/Review';
import Copyright from 'src/components/Copyright';
import * as api from 'src/utils/apiUtil';
import exchangeKey from 'src/components/Common/exchangeKey';
import { encryptionData } from 'src/components/Common/useRSA';
import { encryptDES, decryptDES } from 'src/components/Common/useDES';

const theme = createTheme();

const Checkout = () => {
    const calculateTotal = (items) => items.reduce((acc, item) => acc + item.amount * item.price, 0);
    const history = useHistory();
    const items = JSON.parse(localStorage.getItem('items'));
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get('cardName');
        const number = data.get('cardNumber');
        const date = data.get('expDate');
        const c = data.get('cvv');
        const id = localStorage.getItem("userId")

        exchangeKey().then(function (result) {
            const list = [];

            items.map((item) => {
                console.log(item);
                let obj = {
                    productId: encryptDES(item.productId.toString()),
                    amount: encryptDES(item.amount.toString()),
                    price: encryptDES(item.price.toString()),
                }
                list.push(obj)
            })

            const userId = encryptDES(id);
            const price = encryptDES(calculateTotal(items).toFixed(2).toString());
            api.addOrder({userId, price, list});
            console.log("userid" + userId);
            // credit card
            const cardName = encryptDES(encryptionData(name, result));
            const cardNumber = encryptDES(encryptionData(number, result));
            const expDate = encryptDES(encryptionData(date, result));
            const cvv = encryptDES(encryptionData(c, result));
            console.log(cardName, cardNumber, expDate, cvv);
            const checkoutRes = api.addCreditCard({ userId, cardName, cardNumber, expDate, cvv });
            checkoutRes.then((r) => {
                if (r.status === 200) {
                    history.push('/order-success');
                }
            });
        });
    };
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
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
                    <Avatar sx={{ m: 1 }}>
                    <Link to='/dashboard'>
                        <AppleIcon />          
                    </Link>
                </Avatar>
                </Typography>
            </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Box sx={{ mt: 2, mb: 3 }}>
                      <Review items={items} />
                    </Box>
                    <Divider />
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <PaymentForm />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 4, mb: 1 }}>
                            Submit
                        </Button>
                        <Copyright sx={{ mt: 15 }} />
                    </Box>
                </Paper>
              </Container>
        </ThemeProvider>
    )
};

export default Checkout;



