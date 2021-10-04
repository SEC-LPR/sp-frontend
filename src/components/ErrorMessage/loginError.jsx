import React from 'react';
import {
    Typography
} from '@mui/material';
import 'src/components/ErrorMessage/error.scss'

const LoginErrorMessage = () => {
    return (
        <div className="error">
            <Typography>
                Incorrect account or password
            </Typography>
        </div>
    )
}

export default LoginErrorMessage;
