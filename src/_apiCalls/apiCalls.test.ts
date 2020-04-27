/**
 * @jest-environment jsdom
 */
import { IRestaurantObject } from 'assets/ts/interfaces'
import mockRestaurant from 'assets/ts/test/mockRestaurant';
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

      mockResponse = [ mockRestaurant ];

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
