import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { IAuthContext, AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';


describe('Pruebas en <DashboardRoutes />', () => {

    const authContext: IAuthContext = {
        authState: {
            logged: true,
            username: 'Andres',
        },
        dispatch: jest.fn(),
    };

    test('debe mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={authContext}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>    
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Andres');
    });
    

});

