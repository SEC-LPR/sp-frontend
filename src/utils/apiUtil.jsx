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
    params: {
        amount,
    }
})

export const addCreditCard = ({userId, cardName, cardNumber, expDate, cvv}) => axios({
    method: 'post',
    url: `${baseUrl}/${userId}/credit`,
    data: {
        cardName,
        cardNumber,
        expDate,
        cvv
    }
})

export const addOrder = ({userId, orderLists }) => axios({
    method: 'post',
    url: `${baseUrl}/${userId}/order/create`,
    data: {
        orderLists,
    }
})

export const getRSA = () => axios({
    method: 'get',
    url: `${baseUrl}/rsa`,
})

export const exchangeDES = (key) => axios({
    method: 'post',
    url: `${baseUrl}/des`,
    data: {
        key,
    }
})