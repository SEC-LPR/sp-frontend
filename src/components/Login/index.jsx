import React, {useState, useEffect} from 'react';
import {
    Link,
    useHistory,
} from 'react-router-dom';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Paper,
    Box,
    Grid,
    Typography
} from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginBG from '../Login/login.jpg';
import Copyright from 'src/components/Copyright';
import LoginErrorMessage from '../ErrorMessage/loginError';
import EmailErrorMessage from '../ErrorMessage/emailError';
import * as api from 'src/utils/apiUtil';
import exchangeKey from 'src/components/Common/exchangeKey';
import { encryptDES } from 'src/components/Common/useDES';

const theme = createTheme();

const Login = () => {
    const history = useHistory();
    const [error, setError] = useState(false);
    const [email, setEmail] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = encryptDES(data.get('email'));
        const password = encryptDES(data.get('password'));
        console.log(username);
        console.log(password);
        // const username = data.get('email');
        // const password = data.get('password');
        try {
            const loginRes = await api.login({ username, password });
            if (loginRes.status === 200) {
                localStorage.setItem('userId', loginRes.data.id);
                localStorage.setItem('isLogin', true);
                history.push('/dashboard');
            }
        } catch (error) {
            if (error.response.status === 403) {
                setError(true);
            }
        }
    };

    useEffect(() => {
        exchangeKey();
    }, [])
    
    const handleEmailChange = (event) => {
        const email = event.target.value;
        const emailReg = new RegExp(/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/);
        const emailCheck = emailReg.test(email);
        if (!emailCheck) {
            setEmail(true);
        } else {
            setEmail(false);
        }
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7}
                sx={{
                backgroundImage: `url(${loginBG})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AppleIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                        {error && <LoginErrorMessage />}
                        {email && <EmailErrorMessage />}
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={handleEmailChange}/>
                        <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"
                        />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <a href="/" variant="body2">
                                    Forgot password?
                                </a>    
                            </Grid>
                            <Grid item>
                                <Link to='/register' variant="body2">
                                    {"Don't have an account? Sign Up"}
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

export default Login;