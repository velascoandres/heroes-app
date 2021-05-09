import React, { FC } from 'react';
import { HeroList } from '../heroes/HeroList';

export const MarvelScreen: FC = () => {
    return (
        <div>
            <h2>Marvel Screen</h2>
            <hr />
            <HeroList publisher="Marvel Comics" />
        </div>
    );
};
