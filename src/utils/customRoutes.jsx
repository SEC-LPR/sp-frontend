/* eslint-disable react/jsx-props-no-spreading,no-restricted-syntax */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
    {...rest}
    render={
        (props) => (
        localStorage.getItem('isLogin') === 'true'
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login' }} />
        )
    }
    />
);

export const PublicRoute = ({ component: Component,restricted, ...rest }) => (
    <Route
    {...rest}
    render={
        (props) => (
        localStorage.getItem('isLogin') === 'true' && restricted
            ? <Redirect to={{ pathname: '/dashboard' }} />
            : <Component {...props} />
        )
    }
    />
);

