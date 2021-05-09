import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter: FC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen}></Route>
                    <Route path="/" component={DashboardRoutes}></Route>
                </Switch>
            </div>
        </Router>
    );
};
