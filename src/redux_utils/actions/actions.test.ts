import * as I from 'assets/ts/interfaces';
import mockRestaurant from 'assets/ts/test/mockRestaurant';
import * as actions from '../actions';

describe("Add all restaurants function", () => {
  it("should return object with a type of ADD_RESTAURANTS when addRestaurants is called", () => {
    const mockRestaurants: I.IRestaurantObject[] = [mockRestaurant];

    const expected: I.IAddRestaurantAction = {
      type: 'ADD_RESTAURANTS',
      restaurants: mockRestaurants
    };

    const result = actions.addRestaurants(mockRestaurants);

    expect(result).toEqual(expected);
  });
});
