import React from 'react';
import {
    Link,
} from 'react-router-dom';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Paper,
    Box,
    Grid,
    Typography
} from '@mui/material';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import registerBG from '../Register/register.jpg';

const theme = createTheme();

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                FakeApple
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    }
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7}
                sx={{
                backgroundImage: `url(${registerBG})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                        <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
                            <DesktopMacIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Create Your FakeApple ID
                        </Typography> 
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
                            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                            <TextField margin="normal" required fullWidth name="confirmPassword" label="Confirm Password" type="password" id="password" autoComplete="confirm-password"/>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/login" variant="body2">
                                        Already have account? Login
                                    </Link>    
                                </Grid>
                                </Grid>
                            <Copyright sx={{ mt: 50 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
};

export default Register;