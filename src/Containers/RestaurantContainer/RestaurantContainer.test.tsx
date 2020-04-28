/**
* @jest-environment jsdom
*/

import React from 'react';
import mockStore from 'assets/ts/test/mockStore';
import RestaurantContainer from './RestaurantContainer';
import { render, act, RenderResult } from '@testing-library/react';

const mockDispatch = jest.fn();
let mockCurrentPage: number = 0;
let mockDisplayPage: number = mockCurrentPage + 1;

jest.mock('react-redux', () => ({
  useSelector: () => ({
    ...mockStore,
    currentPage: mockCurrentPage,
    displayPage: mockDisplayPage
  }),
  useDispatch: () => mockDispatch
}));

describe("RestaurantContainer", () => {
  let wrapper: RenderResult;

  it('should match the snapshot', async () => {
    await act(async () => {
      wrapper = render(<RestaurantContainer />);
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with the next pack of restaurants', async () => {
    mockCurrentPage = 1;
    mockDisplayPage = 2;
    await act(async () => {
      wrapper = render(<RestaurantContainer />);
    });
    expect(wrapper).toMatchSnapshot();
  });
});
