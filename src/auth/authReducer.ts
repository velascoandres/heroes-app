export enum AuthActionTypes {
    LOGIN = '[auth] login',
    LOGOUT = '[auth] logout',
}

export interface AuthState {
    username: string;
    logged: boolean;
}

export interface AuthAction {
    type: AuthActionTypes;
}

export interface LoginAction extends AuthAction {
    type: AuthActionTypes.LOGIN;
    payload: {
        name: string;
    };
}

export interface LogoutAction extends AuthAction {
    type: AuthActionTypes.LOGOUT;
}


export const initialAuthState: AuthState = {
    logged: false,
    username: '',
};

export const authReducer = (state: AuthState = initialAuthState, action: AuthAction): AuthState => {
    const { type } = action;
    switch (type) {
        case AuthActionTypes.LOGIN:
            const {payload} = action as LoginAction;
            return {
                ...state,
                username: payload.name,
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
