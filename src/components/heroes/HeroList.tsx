import React, { FC, useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import { IHero, Publisher } from './interfaces';

export interface HeroListProps {
    publisher: Publisher;
}

export const HeroList: FC<HeroListProps> = ({ publisher }: HeroListProps) => {
    // if publisher changes
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row animate__animated animate__fadeIn">
            {heroes.map((hero: IHero, index: number) => {
                
                const style ='col-lg-4 col-md-6 col-sm-12 animate__animated';
                const animation =  index % 2 === 0 ? 'animate__zoomInLeft' : 'animate__zoomInRight';

                return (
                    <div key={hero.id} className={`${style} ${animation}`}>
                        <HeroCard hero={hero} />
                    </div>
                );
            })}
        </div>
    );
};
