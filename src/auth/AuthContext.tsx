import { createContext } from 'react';
import { AuthAction, AuthState, initialAuthState } from './authReducer';

export interface IAuthContext {
    authState: AuthState;
    dispatch: (action: AuthAction) => void;
}

const initialContext: IAuthContext = {
    authState: initialAuthState,
    dispatch: (action: AuthAction) => {/* */},
};

export const AuthContext = createContext<IAuthContext>(initialContext);
