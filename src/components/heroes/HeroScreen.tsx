import React, { FC, useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { History, LocationState } from 'history';
import { getHeroeById } from '../../selectors/getHeroById';
import { getHeroPathById } from '../../helpers/getHeroPathById';


export interface HeroParams {
    heroId: string;
}

interface HeroScreenProps {
    history: History<LocationState>;
}

export const HeroScreen: FC<HeroScreenProps> = ({ history }: HeroScreenProps) => {
    const { heroId } = useParams<HeroParams>();

    const hero = useMemo(() => getHeroeById(heroId), [heroId]);

    console.log(hero, heroId);

    if (!hero) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {
        const { goBack, length, push } = history;
        if (length <= 2) {
            push('/');
        } else {
            goBack();
        }
    };

    const { id, superhero, characters, alter_ego, publisher, first_appearance } = hero;

    return (
        <div className="row mt-5">
            <div className="col-md-4 col-sm-12">
                <img
                   
                    // src={`/assets/heroes/${id}.jpg`} // desde public/assets
                    // src={batman} //
                    src={getHeroPathById(id)} 
                    className="card-img-top animate__animated animate__bounceIn" 
                    alt={superhero} 
                />
               
            </div>

            <div className="col-md-8 col-sm-12">
                <h2 className="animate__animated animate__rotateInDownLeft">Hero: {superhero} </h2>
                <span className="badge bg-secondary ms-1 animate__animated animate__bounceIn">{publisher}</span>
                <hr />

                <p className="text animate__animated animate__bounceIn">
                    <strong>Alter Ego: </strong>
                    {alter_ego}
                </p>

                {alter_ego !== characters && (
                    <>
                        <hr />
                        <div className="card-text">
                            {characters.split(',').map((character: string, index: number) => {
                                const style = index % 2 === 0 ? 'bg-primary animate__zoomInLeft' : 'bg-success animate__zoomInRight';

                                return (
                                    <span 
                                        key={character} 
                                        className={`badge animate__animated ${style} ms-1`}
                                    >
                                        {character}
                                    </span>
                                );
                            })}
                        </div>
                    </>
                )}

                <hr />

                <p className="animate__animated animate__bounceIn" >
                    <strong>First Appereace: </strong> <small className="text-muted">{first_appearance}</small>
                </p>

                <button className="btn btn-success animate__animated animate__bounceIn" onClick={handleReturn}>
                    Return
                </button>
            </div>
        </div>
    );
};
