/**
 * @jest-environment jsdom
 */
import { IRestaurantObject } from 'assets/ts/interfaces';
import { IHeaderObject, getRestaurants } from './apiCalls';

describe('apiCalls', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getRestaurants', () => {
    let mockOptions: IHeaderObject, mockResponse: IRestaurantObject[];

    beforeEach(() => {
      mockOptions = {
        method: "GET",
        headers: {
          Authorization: "Api-Key q3MNxtfep8Gt",
        }
      };

      mockResponse = [{
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

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should fetch with the correct arguments', () => {
      const endpoint: string = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
      const expected: [string, IHeaderObject] = [endpoint, mockOptions];

      getRestaurants();

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an object with all restaurants data', () => {
      expect(getRestaurants()).resolves.toEqual(mockResponse);
    });

    it('SAD: should throw an error if response is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getRestaurants()).rejects.toEqual(Error('Failure to get restaurants.'))
    });

    it('SAD: should throw an error if the promise does not resolve', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Fetch failed!'));
      });

      expect(getRestaurants()).rejects.toThrowError('Fetch failed!')
    });
  });
});
