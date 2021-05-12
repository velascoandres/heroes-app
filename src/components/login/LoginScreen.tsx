import React, { FC } from 'react';
import { History, LocationState } from 'history';

interface LoginScreenProps {
    history: History<LocationState>;
}


export const LoginScreen: FC<LoginScreenProps> = ({ history }: LoginScreenProps) => {
    const handleClick = () => {
        // Navigate to dashboard
        // history.push('/');
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
