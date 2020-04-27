import restaurantsReducer from './restaurants';
import {
  IRestaurantObject,
  IActionObject,
  IAddRestaurantAction
} from 'assets/ts/interfaces';
import mockRestaurant from 'assets/ts/test/mockRestaurant';

type emptyArray = [];

describe('actionsReducer', () => {
  it("should return initial value", () => {
    const mockAction: IActionObject = {
      type: '',
      restaurants: undefined
    };
    const expected: emptyArray = [];
    const result = restaurantsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array of restaurants if type of action is ADD_RESTAURANTS", () => {
    const mockRestaurants: IRestaurantObject[] = [ mockRestaurant ];

    const mockAction: IAddRestaurantAction = {
      type: 'ADD_RESTAURANTS',
      restaurants: mockRestaurants
    };

    const expected: IRestaurantObject[] = mockRestaurants;

    const result = restaurantsReducer([], mockAction);

    expect(result).toEqual(expected);
  });
});
