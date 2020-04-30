import { IRestaurantObject } from 'assets/ts/interfaces';

export const sortByAlphabet = (restaurants: IRestaurantObject[]) => {
  return restaurants.sort((a: IRestaurantObject, b: IRestaurantObject) => (
    a.name > b.name ? 1 : -1
  ));
};

export const getGenres = (restaurants: IRestaurantObject[]): string[] => {
  return restaurants
    .map((rest: IRestaurantObject) => rest.genre)
    .reduce((acc: string[], genres: string) => {
      const separated = genres.split(',');
      separated.forEach((genre: string) => {
        if(!acc.includes(genre.toLowerCase())) { acc = [...acc, genre.toLowerCase()] }
      });
      return acc;
    }, []);
};

export const getAttire = (restaurants: IRestaurantObject[]): string[] => {
  return restaurants
    .map((rest: IRestaurantObject) => rest.attire)
    .reduce((acc: string[], genres: string) => {
      const separated = genres.split(' ');
      separated.forEach((genre: string) => {
        if(!acc.includes(genre.toLowerCase())) { acc = [...acc, genre.toLowerCase()] }
      });
      return acc;
    }, []);
};
