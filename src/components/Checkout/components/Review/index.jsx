import React from 'react';
import {
    Typography,
    List,
    ListItem,
    ListItemText
  } from '@mui/material';


const Review = ({ items }) => {
  const calculateTotal = (items) => items.reduce((acc, item) => acc + item.amount * item.price, 0);
  
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {items.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={`${product.name} * ${product.amount}`} />
            <Typography variant="body2"> {product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${calculateTotal(items).toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}

export default Review;