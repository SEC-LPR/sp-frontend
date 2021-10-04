import React from 'react';
import {
    Link,
    Typography,
} from '@mui/material';

const Copyright = () => {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        {' '}
        <Link color="inherit" href="https://www.apple.com/au/">
          Fake Apple Inc
        </Link>
      </Typography>
    );
}

export default Copyright