const heroesImages = require.context('../assets/heroes', true);


export const getHeroPathById = (id: string, extension = 'jpg'): string => {
    return heroesImages(`./${id}.${extension}`).default;
} 