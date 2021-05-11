import React, { FC } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroeById } from '../../selectors/getHeroById';
import { IHero } from './interfaces';

export interface HeroParams {
    heroId: string;
}

export const HeroScreen: FC = () => {
    const { heroId } = useParams<HeroParams>();

    const hero = getHeroeById(heroId);

    console.log(hero, heroId);

    if (!hero) {
        return <Redirect to="/" />;
    }

    const {superhero, characters, alter_ego, publisher, first_appearance} = hero;

    return (
        <div>
            <h2>Hero: {superhero}</h2>
        </div>
    );
};
