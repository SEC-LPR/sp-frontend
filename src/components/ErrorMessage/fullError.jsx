import React from 'react';
import {
    Typography
} from '@mui/material';
import 'src/components/ErrorMessage/error.scss'

const FullErrorMessage = () => {
    return (
        <div className="error">
            <Typography>
                The required quantity of goods has exceeded the inventory quantity
            </Typography>
        </div>
    )
}

export default FullErrorMessage;