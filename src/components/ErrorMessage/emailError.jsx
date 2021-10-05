import React from 'react';
import {
    Typography
} from '@mui/material';
import 'src/components/ErrorMessage/error.scss'

const EmailErrorMessage = () => {
    return (
        <div className="error">
            <Typography>
                Incorrect email format
            </Typography>
        </div>
    )
}

export default EmailErrorMessage;