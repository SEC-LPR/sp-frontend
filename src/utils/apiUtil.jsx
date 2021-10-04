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