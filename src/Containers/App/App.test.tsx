/**
 * @jest-environment jsdom
 */

import React from 'react';
import { act, cleanup, render, RenderResult } from '@testing-library/react';
import { IRestaurantObject } from 'assets/ts/interfaces';
import App from './App';
import { getRestaurants } from '_apiCalls/apiCalls';
import { addRestaurants } from 'redux_utils/actions';

jest.mock('_apiCalls/apiCalls');
jest.mock('redux_utils/actions');

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe('App component', () => {
  let wrapper: RenderResult;

  afterEach(() => cleanup());

  it('should match the snapshot while fetch is loading', async() => {
    await act(async () => {
      wrapper = render(<App />);
    });
    expect(wrapper).toMatchSnapshot();
  });

  describe("Tests for happy result of fetching", () => {
    const mockResponse: IRestaurantObject[] = [{
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

    beforeEach(() => {
      (getRestaurants as jest.Mock).mockImplementation(() => {
        return Promise.resolve(mockResponse);
      });
    });

    it('should match the snapshot while fetch is done', async() => {
      await act(async () => {
        wrapper = render(<App />);
      });
      expect(wrapper).toMatchSnapshot();
    });

    it('should call getRestaurants after rendering', async () => {
      await act(async () => {
        render(<App />);
      });
      expect(getRestaurants).toHaveBeenCalled();
    });

    it('should call addRestaurants with result of fetching as an attribute', async () => {
      await act(async () => {
        render(<App />);
      });
      expect(addRestaurants).toHaveBeenCalledWith(mockResponse);
    });
  });

  describe("Tests for sad result of fetching", () => {
    it('should match the snapshot while fetch is failed', async() => {
      (getRestaurants as jest.Mock).mockImplementation(() => {
        return Promise.reject('Fetch failed!');
      });

      await act(async () => {
        wrapper = render(<App />);
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
