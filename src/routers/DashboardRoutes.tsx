import React, { FC } from 'react';
import { Fragment } from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcSreen } from '../components/dc/DcSreen';

export const DashboardRoutes: FC = () => {
    return (
        <Fragment>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/heroe/:heroeId" component={HeroScreen}></Route>
                    <Route exact path="/dc" component={DcSreen}></Route>
                    
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </Fragment>
    );
};
