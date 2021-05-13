import React, { useContext } from 'react';
import { History, LocationState } from 'history';
import { AuthActionTypes, LoginAction } from '../../auth/authReducer';
import { AuthContext } from '../../auth/AuthContext';

interface LoginScreenProps {
    history: History<LocationState>;
}


export const LoginScreen: React.FC<LoginScreenProps> = ({ history }: LoginScreenProps) => {
    
    const {dispatch} = useContext(AuthContext)


    const handleClick = () => {
        // Navigate to dashboard
        // history.push('/');
        const loginAction: LoginAction = {
            payload: {
                name: 'Andres'
            },
            type: AuthActionTypes.LOGIN
        };
        
        dispatch(loginAction);
        history.replace('/');
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button className="btn btn-primary" onClick={handleClick}>
                Login
            </button>
        </div>
    );
};
