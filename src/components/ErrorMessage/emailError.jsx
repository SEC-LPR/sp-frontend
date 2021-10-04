import React from 'react';
import {
    Typography
} from '@mui/material';
import 'src/components/ErrorMessage/error.scss'

const EmailErrorMessage = () => {
    return (
        <div className="error">
            <Typography>
                The email format does not meet the requirements
            </Typography>
        </div>
    )
}

export default EmailErrorMessage;