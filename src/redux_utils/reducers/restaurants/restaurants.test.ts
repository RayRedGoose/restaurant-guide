import restaurantsReducer from './restaurants';
import {
  IRestaurantObject,
  IActionObject,
  IAddRestaurantAction
} from 'assets/ts/interfaces';

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
    const mockRestaurants: IRestaurantObject[] = [{
      id: 'ac11',
      name: 'Old Hickory Steakhouse',
      address1: "201 Waterfront St",
      city: "Oxon Hill",
      state: "MD",
      zip: "20745",
      lat: "38.782098",
      long: "-77.017492",
      telephone: "(301) 965-4000",
      tags: "Social,Food and Dining,Restaurants,Steakhouses",
      website: "http://www.gaylordnational.com",
      genre: "Steak,American,Contemporary,Seafood,Cafe",
      hours: "Open Daily 5:30 PM-10:00 PM",
      attire: "business casual"
    }];

    const mockAction: IAddRestaurantAction = {
      type: 'ADD_RESTAURANTS',
      restaurants: mockRestaurants
    };

    const expected: IRestaurantObject[] = mockRestaurants;

    const result = restaurantsReducer([], mockAction);

    expect(result).toEqual(expected);
  });
});
