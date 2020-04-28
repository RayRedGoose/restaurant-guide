/**
* @jest-environment jsdom
*/

import React from 'react';
import { act, cleanup, render, RenderResult } from '@testing-library/react';
import { IRestaurantObject } from 'assets/ts/interfaces';
import mockStore from 'assets/ts/test/mockStore';
import mockRestaurant from 'assets/ts/test/mockRestaurant';
import App from './App';
import { getRestaurants } from '_apiCalls/apiCalls';
import { addRestaurants, addMaxPages } from 'redux_utils/actions';

jest.mock('_apiCalls/apiCalls');
jest.mock('redux_utils/actions');

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ({
    ...mockStore,
    displayPage: 1
  })
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

    it('should call addMaxPages with number of fetched items as an attribute', async () => {
      await act(async () => {
        render(<App />);
      });
      expect(addMaxPages).toHaveBeenCalledWith(1);
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
