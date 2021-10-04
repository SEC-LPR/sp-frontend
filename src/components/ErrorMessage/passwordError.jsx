import React from 'react';
import {
    Typography
} from '@mui/material';
import 'src/components/ErrorMessage/error.scss'

const PasswordErrorMessage = () => {
    return (
        <div className="error">
            <Typography>
                Password must contain numbers and English letters, and at least eight digits
            </Typography>
        </div>
    )
}

export default PasswordErrorMessage;