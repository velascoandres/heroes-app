import { IHero } from '../components/heroes/interfaces';
import { heroes } from '../data/heroes.mock';

export const getHeroeByName = (name: string): IHero[] => {

    console.log('filt', name);

    if (!name) {
        return [];
    }

    const formatedName = name.toLocaleLowerCase();

    return heroes.filter((heroe: IHero) => {

        const matchHeroName = heroe.superhero.toLocaleLowerCase().includes(formatedName);
        const matchId = heroe.id.toLocaleLowerCase().includes(formatedName);

        return matchHeroName || matchId;
    });
};
