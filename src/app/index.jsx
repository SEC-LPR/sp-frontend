import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import { PublicRoute, PrivateRoute } from 'src/utils/customRoutes';
import Dashboard from 'src/components/Dashboard';
import Login from 'src/components/Login';
import Register from 'src/components/Register';
import Checkout from 'src/components/Checkout';
import Test from 'src/components/Common/Test';

const App = () => (
    <Router>
        <Switch>
        <PublicRoute exact path="/" restricted={false} component={Login} />
        <PublicRoute path="/login" restricted={false} component={Login} />
        <PublicRoute path="/register" restricted={true} component={Register} />
        <PublicRoute path="/dashboard" component={Dashboard} />
        <PublicRoute path="/checkout" component={Checkout} />
        <PublicRoute path="/test" component={Test} />

        </Switch>
    </Router>
)

export default App;