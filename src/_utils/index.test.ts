import * as utils from '../_utils';
import { IRestaurantObject } from 'assets/ts/interfaces';
import mockRestaurant, { mockRestaurantAdditional } from 'assets/ts/test/mockRestaurant';

it('should return the array of restaurants sorted alphabetically by name', () => {
  const restaurants: IRestaurantObject[] = [ mockRestaurant, mockRestaurantAdditional ];
  const expected: IRestaurantObject[] = [ mockRestaurantAdditional, mockRestaurant ];
  const result: IRestaurantObject[] = utils.sortByAlphabet(restaurants);

  expect(result).toEqual(expected);
});
