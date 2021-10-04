import axios from 'axios';

const baseUrl = process.env.REACT_API_URL;

export const login = ({ username, password }) => axios({
    method: 'post',
    url: `${baseUrl}/login`,
    data: {
        username,
        password,
    }
})

export const register = ({ username, firstName, lastName, password }) => axios({
    method: 'post',
    url: `${baseUrl}/signup`,
    data: {
        username,
        firstName,
        lastName,
        password
    }
})

export const getCartInfo = ( userId ) => axios({
    method: 'get',
    url: `${baseUrl}/cart/${userId}`,
})

export const removeItemFromCart = ({ userId, productId }) => axios({
    method: 'delete',
    url: `${baseUrl}/cart/${userId}/${productId}`,
})

export const updateItemAmount = ({ userId, productId, amount }) => axios({
    method: 'put',
    url: `${baseUrl}/cart/${userId}/${productId}`,
    data: {
        userId,
        productId,
        amount,
    }
})

export const addCreditCard = ({userId, cardName, cardNumber, expDate, cvv}) => axios({
    method: 'put',
    url: `${baseUrl}/${userId}/credit`,
    data: {
        cardName,
        cardNumber,
        expDate,
        cvv
    }
})

export const addOrder = ({id, }) => axios({
    method: 'post',
    url: `${baseUrl}/`,
    data: {
        
    }
})