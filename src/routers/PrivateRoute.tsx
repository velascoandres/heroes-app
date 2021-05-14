import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps extends RouteProps{
    isAuthenticated: boolean;
    component: React.FC<Record<string, unknown>>;
    path: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
    isAuthenticated,
    component: Component,
    path,
    exact,
}: PrivateRouteProps) => {
    return (
        <Route
            exact={exact}
            path={path}
            component={(props: Record<string, unknown>) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};
