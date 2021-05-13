enum AuthActionTypes {
    LOGIN = '[auth] login',
    LOGOUT = '[auth] logout',
}

export interface AuthState {
    username: string;
    logged: boolean;
}

export interface AuthAction {
    type: AuthActionTypes;
    payload: string;
}

export const initialAuthState: AuthState = {
    logged: false,
    username: '',
};

export const authReducer = (state: AuthState = initialAuthState, action: AuthAction): AuthState => {
    const { type, payload } = action;

    switch (type) {
        case AuthActionTypes.LOGIN:
            return {
                ...state,
                username: payload,
                logged: true,
            };
        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                username: '',
                logged: false,
            };
        default:
            return {
                ...state,
            };
    }
};
