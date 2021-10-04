import React from 'react';
import {
    Typography
} from '@mui/material';
import 'src/components/ErrorMessage/error.scss'

const UserExistErrorMessage = () => {
    return (
        <div className="error">
            <Typography>
                User already exists
            </Typography>
        </div>
    )
}

export default UserExistErrorMessage;