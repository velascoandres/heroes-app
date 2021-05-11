import { IHero } from '../components/heroes/interfaces';
import { heroes } from '../data/heroes.mock';

export const getHeroeById = (id: string): IHero | undefined => {
    return heroes.find((heroe: IHero) => heroe.id === id);
};
