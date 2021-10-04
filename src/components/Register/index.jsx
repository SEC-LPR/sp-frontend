import React from 'react';
import {
    Link,
    useHistory,
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
import Copyright from 'src/components/Copyright';
import * as api from 'src/utils/apiUtil';

const theme = createTheme();

const Register = () => {
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('email');
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const password = data.get('password');
        try {
            const registerRes = api.register({ username, firstName, lastName, password });
            if (registerRes.status === 200) {
                history.push('/login');
            }
        } catch (error) {
            if (error.response.status === 400) {
                alert('Already registered');
            }
        }
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
                            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                            <TextField margin="normal" required fullWidth name="firstName" label="First Name" type="name" id="firstName" autoComplete="first-name" />
                            <TextField margin="normal" required fullWidth name="lastName" label="Last Name" type="name" id="lastName" autoComplete="last-name" />
                            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/login" variant="body2">
                                        Already have account? Login
                                    </Link>    
                                </Grid>
                                </Grid>
                            <Copyright sx={{ mt: 30 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
};

export default Register;