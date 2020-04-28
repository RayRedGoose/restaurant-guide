import {
  IRestaurantObject,
  IAddRestaurantAction,
  IChangeCurrentPageAction,
  IAddMaxPages
} from 'assets/ts/interfaces';

export const addRestaurants = (restaurants: IRestaurantObject[]): IAddRestaurantAction => ({
  type: 'ADD_RESTAURANTS',
  restaurants: restaurants
});

export const changeCurrentPage = (changer: number): IChangeCurrentPageAction => ({
  type: 'CHANGE_CURRENT_PAGE',
  changer: changer
});

export const addMaxPages = (total: number): IAddMaxPages => ({
  type: 'ADD_MAX_PAGES',
  total: total
});
