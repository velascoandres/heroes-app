import React, { FC } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { Publisher } from './interfaces';

export interface HeroListProps {
    publisher: Publisher;
}

export const HeroList: FC<HeroListProps> = ({ publisher }: HeroListProps) => {
    const heroes = getHeroesByPublisher(publisher);

    return (
        <ul>
            {heroes.map((hero) => (
                <li key={hero.id}>{hero.superhero}</li>
            ))}
        </ul>
    );
};
