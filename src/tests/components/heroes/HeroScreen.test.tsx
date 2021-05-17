import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { getMockRouterProps } from '../../test-utils/getMockRouter';

describe('Pruebas en <HeroScreen /> ', () => {
    const historyMock = getMockRouterProps(null).history;

    test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={historyMock} />
            </MemoryRouter>,
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('debe de mostrar un hero si el parámetro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId">
                    <HeroScreen history={historyMock} />
                </Route>
            </MemoryRouter>,
        );
        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('debe de regresar a la pantalla anterior con PUSH', () => {
        const history = {
            ...historyMock,
            length: 1,
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path="/hero/:heroId"
                    component={(props: unknown) => <HeroScreen {...props} history={history} />}
                />
            </MemoryRouter>,
        );
        wrapper.find('button').simulate('click');
        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    });

    test('debe de mostrar un hero si el parámetro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId">
                    <HeroScreen history={historyMock} />
                </Route>
            </MemoryRouter>,
        );
        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('debe de regresar a la pantalla anterior con GOBACK', () => {
        const history = {
            ...historyMock,
            length: 3,
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path="/hero/:heroId"
                    component={(props: unknown) => <HeroScreen {...props} history={history} />}
                />
            </MemoryRouter>,
        );
        wrapper.find('button').simulate('click');
        expect(history.push).toHaveBeenCalledTimes(0);
        expect(history.goBack).toHaveBeenCalled();
    });

    test('debe de llamar el redirect si el heroe no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider12312323']}>
                <Route path="/hero/:heroId">
                    <HeroScreen history={historyMock} />
                </Route>
            </MemoryRouter>,
        );
        expect(wrapper.text()).toBe('');
    });
});
