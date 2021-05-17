import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { Router } from 'react-router-dom';
import { AuthContext, IAuthContext } from '../../auth/AuthContext';
import { AuthActionTypes } from '../../auth/authReducer';
import { Navbar } from '../../components/ui/Navbar';
import { getMockRouterProps } from '../test-utils/getMockRouter';


describe('Pruebas en <Navbar />', () => {


    const historyM = getMockRouterProps(null).history;

    const authContext: IAuthContext = {
        authState: {
            logged: true,
            username: 'Andres',
        },
        dispatch: jest.fn(),
    };

    const wrapper = mount(
        <AuthContext.Provider value={authContext}>
            <MemoryRouter>
                <Router history={historyM}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>,
    );

    afterEach(
        () => {
            jest.clearAllMocks();
        }
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Andres');
    });

    test('debe de llamar el logout y el usar history', () => {
        wrapper.find('button').simulate('click');
        expect(authContext.dispatch).toHaveBeenCalledWith({
            type: AuthActionTypes.LOGOUT,
        });
    });
});
