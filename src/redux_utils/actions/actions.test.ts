import * as I from 'assets/ts/interfaces';
import * as actions from '../actions';

describe("Add all restaurants function", () => {
  it("should return object with a type of ADD_RESTAURANTS when addRestaurants is called", () => {
    const mockRestaurants: I.IRestaurantObject[] = [{
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

    const expected: I.IAddRestaurantAction = {
      type: 'ADD_RESTAURANTS',
      restaurants: mockRestaurants
    };

    const result = actions.addRestaurants(mockRestaurants);

    expect(result).toEqual(expected);
  });
});
