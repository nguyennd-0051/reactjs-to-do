import React from 'react';
import { Switch } from 'react-router-dom';
import GuestRoute from './guest-route';
import AuthenticateRoute from './authenticate-route';
import Login from '../views/login';
import propsToJS from '../shared/prop-to-js';
import Tasks from '../views/tasks';

const Routes = () => (
    <Switch>
        <GuestRoute
            exact
            path='/login'
            component={Login}
        />

        <AuthenticateRoute
            exact
            path='/'
            component={Tasks}
        />
    </Switch>
);

export default propsToJS(Routes);
