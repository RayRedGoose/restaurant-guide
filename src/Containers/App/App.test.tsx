/**
* @jest-environment jsdom
*/

/**
* Suppress React 16.8 act() warnings globally.
*/

import React from 'react';
import { act, cleanup, render, RenderResult } from '@testing-library/react';
import { IRestaurantObject } from 'assets/ts/interfaces';
import mockRestaurant from 'assets/ts/test/mockRestaurant';
import App from './App';
import { getRestaurants } from '_apiCalls/apiCalls';
import { addRestaurants } from 'redux_utils/actions';

jest.mock('_apiCalls/apiCalls');
jest.mock('redux_utils/actions');

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => [mockRestaurant]
}));

describe('App component', () => {
  let wrapper: RenderResult;

  afterEach(() => cleanup());

  it('should match the snapshot while fetch is loading', async () => {
    await act(async () => {
      wrapper = render(<App />);
    });
    expect(wrapper).toMatchSnapshot();
  });

  describe("Tests for happy result of fetching", () => {
    const mockResponse: IRestaurantObject[] = [ mockRestaurant ];

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
