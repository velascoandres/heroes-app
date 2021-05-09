import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter: FC = () => {
    return (
        <Router>
            <div>
                <Navbar />

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/login" component={LoginScreen}></Route>
                    <Route exact path="/" component={MarvelScreen}></Route>
                </Switch>
            </div>
        </Router>
    );
};
