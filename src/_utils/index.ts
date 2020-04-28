import { IRestaurantObject } from 'assets/ts/interfaces';

export const sortByAlphabet = (restaurants: IRestaurantObject[]) => {
  return restaurants.sort((a: IRestaurantObject, b: IRestaurantObject) => (
    a.name > b.name ? 1 : -1
  ));
};
