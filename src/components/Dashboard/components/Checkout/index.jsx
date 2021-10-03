import React from 'react';
import '../Checkout/Checkout.scss';

const Checkout = () => {
    const items = JSON.parse(localStorage.getItem('items'));

    const listItems = items.map((number) => (
        <>
            
            <tr key={number.id}>
                <td>{number.title}</td>
                <td>{number.price}</td>
                <td>{number.amount}</td>
            </tr>
        </>
    )  
  );

    return (
        <div>
            <table>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Amount</th>
            </tr>
                {listItems}
            </table>
        </div>
    )
}

export default Checkout;