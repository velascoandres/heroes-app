import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IHero } from './interfaces';

export interface HeroCardProps {
    hero: IHero;
}

export const HeroCard: FC<HeroCardProps> = ({ hero }: HeroCardProps) => {
    const { id, superhero, alter_ego, first_appearance, characters } = hero;

    return (
        <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
                <div className="col-md-7 col-sm-12">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero} />
                </div>

                <div className="col-md-5 col-sm-12">
                    <div className="card-body">
                        <h5 className="card-title w-100">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        <hr />
                        {alter_ego !== characters && (
                            <div className="card-text">
                                {characters.split(',')
                                .map((character: string, index: number) => {
                                   
                                   const style = index % 2 === 0 ?  'bg-primary': 'bg-success';
                                   
                                   return <span key={character} className={`badge ${style} ms-1`}>
                                        {character}
                                    </span>;
                                })}
                            </div>
                        )}

                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`./hero/${id}`} className="">
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
