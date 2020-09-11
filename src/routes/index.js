import React from 'react';
import {Switch} from 'react-router-dom';
import GuestRoute from './guest-route';
import Login from '../views/login';

const Routes = () => (
    <Switch>
        <GuestRoute
            exact
            path='/login'
            component={Login}
        />
    </Switch>
)

export default Routes;
