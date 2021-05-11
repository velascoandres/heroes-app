import React, { FC } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import { Publisher } from './interfaces';

export interface HeroListProps {
    publisher: Publisher;
}

export const HeroList: FC<HeroListProps> = ({ publisher }: HeroListProps) => {
    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row">
            {heroes.map((hero) => (
                <div key={hero.id} className="col-lg-4 col-md-6 col-sm-12">
                    <HeroCard  hero={hero} />
                </div>
            ))}
        </div>
    );
};
