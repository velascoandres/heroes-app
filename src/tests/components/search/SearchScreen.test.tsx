import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router';
import { SearchScreen } from '../../../components/search/SearchScreen';
import { getMockRouterProps } from '../../test-utils/getMockRouter';
import { Router } from 'react-router-dom';

describe('Pruebas en <SearchScreen />', () => {
    test('debe de mostrarse correctamente con valores por defecto', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a Hero');
    });

    test('debe de mostrar a "batman" y el Input con el valor del "queryString"', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>,
        );
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar un error si no se encuentra el hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123123']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>,
        );
        expect(wrapper.find('.alert-warning').text().trim()).toBe('No results for batman123123');
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar el push del history', () => {
        const historyMock = getMockRouterProps(null).history;

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Router history={historyMock}>
                   <Route path="/search" component={SearchScreen} />
                   <SearchScreen />
                </Router>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman',
            }
        });
        wrapper.find('form').simulate('submit');
        expect(historyMock.push).toHaveBeenCalledWith('?q=batman');
    });
});
