import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export interface PrivateRouteProps {
    isAuthenticated: boolean;
    component: React.FC<any>;
    path: string;
}


export const PrivateRoute: React.FC<PrivateRouteProps> = ({isAuthenticated, component: Component, path}: PrivateRouteProps) => {
    
    
    
    return (
       <Route path={path}
        
        component={
            (props: Record<string, any>) => (
                (isAuthenticated) 
                    ?
                 (<Component {...props} />) 
                 : (<Redirect to="/login" />) 
                )
        }
       
       />
           
    );
}
