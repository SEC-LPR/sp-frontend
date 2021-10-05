import React from 'react';
import {
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
import * as useRSA from 'src/components/Common/useRSA';

const theme = createTheme();

const Checkout = () => {
    const history = useHistory();
    const items = JSON.parse(localStorage.getItem('items'));
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const cardName = useRSA.encryption(data.get('cardName'));
        const cardNumber = useRSA.encryption(data.get('cardNumber'));
        const expDate = useRSA.encryption(data.get('expDate'));
        const cvv = useRSA.encryption(data.get('cvv'));
        const userId = localStorage.getItem("userId")

        try {
            const checkoutRes = await api.addCreditCard({userId, cardName, cardNumber, expDate, cvv});
            if (checkoutRes.status === 200) {
                history.push('/order-success');
            }
        } catch (error) {
            if (error.response.status === 400) {
                console.log('failed')
            }
        }
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
                <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                <AppleIcon />          
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



