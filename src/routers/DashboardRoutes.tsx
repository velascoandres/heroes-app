import React from 'react';
import { Fragment } from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcSreen } from '../components/dc/DcSreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes: React.FC = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/hero/:heroId" component={HeroScreen}></Route>
                    <Route exact path="/dc" component={DcSreen}></Route>
                    <Route exact path="/search" component={SearchScreen}></Route>
                    
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </Fragment>
    );
};
