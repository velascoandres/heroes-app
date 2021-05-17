import { AuthActionTypes, authReducer, initialAuthState, LoginAction, LogoutAction } from '../../auth/authReducer';

describe('Pruebas en authReducer', () => {
    test('Debe de retornar el estado por defecto', () => {


        const state = authReducer(undefined, { type: AuthActionTypes.STATUS });
        expect(state).toEqual(initialAuthState);
    });
    test('Debe de autenticar y colocar el name del usuario', () => {
        const accionLogin: LoginAction = {
            type: AuthActionTypes.LOGIN,
            payload: {
                name: 'usuario'
            }
        };

        const estadoLogeado = {
            logged: true,
            username: 'usuario',
        };

        const state = authReducer(initialAuthState, accionLogin);
        expect(state).toEqual(estadoLogeado);

    });
    test('Debe de borrar el name del usuario y logged en false', () => {
        const accionLogout: LogoutAction = {
            type: AuthActionTypes.LOGOUT,
        };

        const estadoDeslogeado = {
            logged: false,
            username: '',
        };

        const state = authReducer(initialAuthState, accionLogout);
        expect(state).toEqual(estadoDeslogeado);
    });
});
