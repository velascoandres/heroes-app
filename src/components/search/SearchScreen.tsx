import React, { useMemo } from 'react';

import { parse } from 'querystring';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { IHero } from '../heroes/interfaces';
import { useHistory, useLocation } from 'react-router-dom';
import { getHeroeByName } from '../../selectors/getHeresByName';

export interface SearchFormState {
    searchText: string;
}

export interface SearchState {
    filteredHeroes: IHero[];
}

export const SearchScreen: React.FC = () => {
    const history = useHistory();

    const location = useLocation();
    const querystring = parse(location.search, '?');
    const { q } = Object.keys(querystring).length ? querystring : { q: '' }; // I put this because parse() returns => '{?q:'batman'}'

    const [formState, onChange] = useForm<SearchFormState>({ searchText: q as string });

    const { searchText } = formState;

    const filteredHeroes = useMemo(() => getHeroeByName(q as string), [q]);

    const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    };

    return (
        <div className="container">
            <div>
                <h1>Search Screen</h1>
            </div>

            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={(e) => handleFilter(e)}>
                        <input
                            type="text"
                            id="searchText"
                            name="searchText"
                            value={searchText}
                            onChange={onChange}
                            placeholder="Find your hero"
                            className="form-control"
                        />

                        <button type="submit" className="btn m-1 btn-block btn-outline-primary">
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-md-7 col-sm-12">
                    <h4>Results...</h4>
                    <hr />
                    {q === '' && <div className="alert alert-info">Search a Hero</div>}

                    {q !== '' && !filteredHeroes.length && (
                        <div className="alert alert-warning">No results for {searchText}</div>
                    )}

                    {filteredHeroes.map((hero: IHero) => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
