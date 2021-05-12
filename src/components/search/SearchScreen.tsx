import React, { FC, useEffect, useState } from 'react';

import { History, LocationState } from 'history';

import {parse} from 'querystring';

import { heroes } from '../../data/heroes.mock';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { IHero } from '../heroes/interfaces';
import { useLocation } from 'react-router-dom';


export interface SearchFormState {
    searchText: string;
}

export interface SearchState {
    filteredHeroes: IHero[];
}



interface SearchScreenProps {
    history: History<LocationState>;
}

export const SearchScreen: FC<SearchScreenProps> = ({history}: SearchScreenProps) => {

    const location = useLocation();


    const search = parse(location.search);

    const [formState, onChange] = useForm<SearchFormState>({searchText: search?.q as string});

    const [searchState, setSearchState] = useState<SearchState>({filteredHeroes: []});

    useEffect(() => {
        console.log(search);
    }, []);

    const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            history.push(`?q=${formState.searchText}`)
            const {searchText} = formState;
            // const filteredHeroes = heroes.filter( chero => chero.superhero.toUpperCase().startsWith(searchText.toUpperCase()) );
            // setSearchState({filteredHeroes});
    };

    return (
        <div className="container">
            <div>
                <h1>Search Screen</h1>
            </div>

            <div className="row">
                <div className="col-5">
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
                <div className="col-7">
                    <h4>Results...</h4>
                    <hr />
                    {searchState.filteredHeroes.map((hero: IHero) => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
