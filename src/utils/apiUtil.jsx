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
    url: `${baseUrl}/${userId}`,
})

export const removeItemFromCart = ({ userId, productId }) => axios({
    method: 'delete',
    url: `${baseUrl}/${userId}/${productId}`,
})

export const updateItemAmount = ({ userId, productId, amount }) => axios({
    method: 'put',
    url: `${baseUrl}/${userId}/${productId}`,
    data: {
        amount,
    }
})

export const addCreditCard = ({id, cardName, cardNumber, expDate, cvv}) => axios({
    method: 'put',
    url: `${baseUrl}/${userId}/credit`,
    data: {
        creditCard,
    }
})

export const addOrder = ({id, }) => axios({
    method: 'post',
    url: `${baseUrl}/`,
    data: {
        
    }
})