import React, { FC, useMemo } from 'react';

import { History, LocationState } from 'history';

import { parse } from 'querystring';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { IHero } from '../heroes/interfaces';
import { useLocation } from 'react-router-dom';
import { getHeroeByName } from '../../selectors/getHeresByName';

export interface SearchFormState {
    searchText: string;
}

export interface SearchState {
    filteredHeroes: IHero[];
}

interface SearchScreenProps {
    history: History<LocationState>;
}

export const SearchScreen: FC<SearchScreenProps> = ({ history }: SearchScreenProps) => {
    const location = useLocation();
    const { q } = parse(location.search, '?'); // I put this because parse() returns => '{?q='batman'}'

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
                    {
                        (q === '') 
                            && <div className="alert alert-info">Search a Hero</div>
                    }

                    {   (q !== '' && !filteredHeroes.length) 
                             && 
                             <div className="alert alert-warning">Heroes not found</div>
                    }

                    {filteredHeroes.map((hero: IHero) => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
