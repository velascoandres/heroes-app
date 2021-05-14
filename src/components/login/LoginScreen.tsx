import React, { useContext } from 'react';
import { AuthActionTypes, LoginAction } from '../../auth/authReducer';
import { AuthContext } from '../../auth/AuthContext';
import { useHistory } from 'react-router-dom';



export const LoginScreen: React.FC = () => {
    
    const {dispatch} = useContext(AuthContext)

    const history = useHistory();



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
