import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter, RouteProps } from 'react-router-dom';

describe('Pruebas en <PrivateRoute />', () => {
    const props: RouteProps = {
        location: {
            pathname: '/marvel',
            search: '',
            hash: '',
            state: null,
        },
    };

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si está autenticado y guardar localstorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Listo</span>}
                    path={''}
                    location={props.location}
                />
            </MemoryRouter>,
        );

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });
});
