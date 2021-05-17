import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext, IAuthContext } from '../../auth/AuthContext';

describe('Pruebas en <AppRouter />', () => {

    const contextValue: IAuthContext = {
        authState: {
            logged: false,
            username: '',
        },
        dispatch: jest.fn(),
    };
    
    test('Debe de mostrar login si no esta autenticado', () => {
        

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el componente marvel si esta autenticado', () => {
        
        const loggedContext: IAuthContext = {
            ...contextValue,
            authState: {
                logged: true,
                username: 'Andres',
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={loggedContext}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper.find('.navbar').exists()).toBe(true);
    });


    


})
