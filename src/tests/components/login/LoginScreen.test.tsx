import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext, IAuthContext } from '../../../auth/AuthContext';
import { AuthActionTypes, LoginAction } from '../../../auth/authReducer';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { getMockRouterProps } from '../../test-utils/getMockRouter';

describe('Pruebas en <LoginScreen />', () => {
    const historyMock = getMockRouterProps(null).history;

    const contextValue: IAuthContext = {
        authState: {
            logged: false,
            username: '',
        },
        dispatch: jest.fn(),
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <LoginScreen />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>,
    );

    test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de realizar el dispatch y la navegacion', () => {
        const accionLogin: LoginAction = {
            type: AuthActionTypes.LOGIN,
            payload: { name: 'Andres' },
        };

        wrapper.find('button').simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalledWith(accionLogin);
        expect(historyMock.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/dc');
        
        wrapper.find('button').simulate('click');
        expect(historyMock.replace).toHaveBeenCalledWith('/dc');
    });
});
