import React, { useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';

import { AuthContext } from './auth/AuthContext';
import { authReducer, AuthState, initialAuthState } from './auth/authReducer';

const init = (): AuthState => {
    try {
        const userStoredRaw = localStorage.getItem('user');
        if (userStoredRaw !== null) {
            return JSON.parse(userStoredRaw) as AuthState;
        } else {
            return initialAuthState;
        }
    } catch (error) {
        return initialAuthState;
    }
};

export const HeroesApp: React.FC = () => {
    const [authState, dispatch] = useReducer(authReducer, initialAuthState, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(authState))
    }, [authState]);

    return (
        <AuthContext.Provider value={{authState, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    );
};
