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
import UserExistErrorMessage from 'src/components/ErrorMessage/userExistError';
import EmailErrorMessage from '../ErrorMessage/emailError';
import PasswordErrorMessage from '../ErrorMessage/passwordError';
import exchangeKey from 'src/components/Common/exchangeKey';
import { encryptDES } from 'src/components/Common/useDES';

const theme = createTheme();

const Register = () => {
    const [exist, setExist] = useState(false);
    const [email, setEmail] = useState(false);
    const [psw, setPsw] = useState(false);
    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = encryptDES(data.get('email'));
        const firstName = encryptDES(data.get('firstName'));
        const lastName = encryptDES(data.get('lastName'));
        const password = encryptDES(data.get('password'));
        // const username = data.get('email');
        // const firstName = data.get('firstName');
        // const lastName = data.get('lastName');
        // const password = data.get('password');
        try {
            const registerRes = await api.register({ username, firstName, lastName, password });
            if (registerRes.status === 200) {
                history.push('/login');
            }
        } catch (error) {
            if (error.response.status === 500) {
                setExist(true);
            }
        }    
    }

    useEffect(() => {
        exchangeKey();
    },[])

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

    const handlePswChange = (event) => {
        const psw = event.target.value;
        const passwordReg = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
        const passwordCheck = passwordReg.test(psw);
        if (!passwordCheck) {
            setPsw(true);
        } else {
            setPsw(false);
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
                        {exist && <UserExistErrorMessage />}
                        {email && <EmailErrorMessage />}
                        {psw && <PasswordErrorMessage/>}
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={handleEmailChange} />
                            <TextField margin="normal" required fullWidth name="firstName" label="First Name" type="name" id="firstName" autoComplete="first-name" />
                            <TextField margin="normal" required fullWidth name="lastName" label="Last Name" type="name" id="lastName" autoComplete="last-name" />
                            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={handlePswChange}/>
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