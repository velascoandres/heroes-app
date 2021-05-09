import { IHero, Publisher } from '../components/heroes/interfaces';
import { heroes } from '../data/heroes.mock';

export const getHeroesByPublisher = (publisher: Publisher): IHero[] => {
    return heroes.filter((heroe: IHero) => heroe.publisher === publisher);
};
