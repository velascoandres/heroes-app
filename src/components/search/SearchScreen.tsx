import React, { FC, useState } from 'react';
import { heroes } from '../../data/heroes.mock';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { IHero } from '../heroes/interfaces';

export interface SearchFormState {
    hero: string;
}

export interface SearchState {
    filteredHeroes: IHero[];
}

export const SearchScreen: FC = () => {

    const [formState, onChange, handleSubmit] = useForm<SearchFormState>({hero: ''});

    const [searchState, setSearchState] = useState<SearchState>({filteredHeroes: []});

    const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
            handleSubmit(e);
            const {hero} = formState;
            const filteredHeroes = heroes.filter( chero => chero.superhero.toUpperCase().startsWith(hero.toUpperCase()) );
            setSearchState({filteredHeroes});
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
                            id="heroe"
                            name="heroe"
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
