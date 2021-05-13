import React, { useReducer } from 'react';
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

    return (
        <AuthContext.Provider value={authState}>
            <AppRouter />
        </AuthContext.Provider>
    );
};
