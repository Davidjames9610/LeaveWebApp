import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';//, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import RequestDashboardPage from '../components/RequestDashboardPage';
import AddRequestPage from '../components/AddRequestPage';
import EditRequestPage from '../components/EditRequestPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/monitor" component={RequestDashboardPage} />
                <PrivateRoute path="/create" component={AddRequestPage} />
                <PrivateRoute path="/edit/:id" component={EditRequestPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
