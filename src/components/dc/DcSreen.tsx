import React, { FC } from 'react'
import { HeroList } from '../heroes/HeroList';

export const DcSreen: FC = () => {
    return (
        <div>
            <h2>DC Comics Screen</h2>
            <hr />
            <HeroList publisher="DC Comics" />    
        </div>
    );
}
