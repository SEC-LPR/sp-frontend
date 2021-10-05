import React from 'react';
import {
    Link,
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
import Copyright from 'src/components/Copyright';

const theme = createTheme();

const Notification = () => {
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
                    <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                    </Typography>
                    <Typography variant="subtitle1">
                    We have emailed your order confirmation, and will send you an update when your order has shipped.
                    </Typography>
                    <Copyright sx={{ mt: 15 }} />
                </Paper>
            </Container>
        </ThemeProvider>
    )
}

export default Notification;