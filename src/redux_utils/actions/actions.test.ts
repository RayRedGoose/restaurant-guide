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

describe("Change current page function", () => {
  it("should return object with a type of CHANGE_CURRENT_PAGE when changeCurrentPage is called", () => {
    const expected: I.IChangeCurrentPageAction = {
      type: 'CHANGE_CURRENT_PAGE',
      changer: 1
    };

    const result = actions.changeCurrentPage(1);

    expect(result).toEqual(expected);
  });
});

describe("Add max page function", () => {
  it("should return object with a type of ADD_MAX_PAGES when addMaxPages is called", () => {
    const expected: I.IAddMaxPages = {
      type: 'ADD_MAX_PAGES',
      total: 20
    };

    const result = actions.addMaxPages(20);

    expect(result).toEqual(expected);
  });
});
