import { createContext } from 'react';
import { AuthState, initialAuthState } from './authReducer';

export const AuthContext = createContext<AuthState>(initialAuthState);
