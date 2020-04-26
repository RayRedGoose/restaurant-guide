import {
  IRestaurantObject,
  IAddRestaurantAction
} from 'assets/ts/interfaces';

export const addRestaurants = (restaurants: IRestaurantObject[]): IAddRestaurantAction => ({
  type: 'ADD_RESTAURANTS',
  restaurants: restaurants
});
