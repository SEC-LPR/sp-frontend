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

export const getCartInfo = ({ userId }) => axios({
    method: 'get',
    url: `${baseUrl}/`,
    data: {
        userId
    }
})

export const removeItemFromCart = ({ userI, productId }) => axios({
    method: 'delete',
    url: `${baseUrl}/`,
    data: {
        userId,
        productId,
    }
})


export const updateItemAmount = ({ userI, productId, amount }) => axios({
    method: 'put',
    url: `${baseUrl}/`,
    data: {
        userI,
        productId,
        amount,
    }
})