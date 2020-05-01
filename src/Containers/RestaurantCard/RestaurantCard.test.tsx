import React from 'react';
import { shallow } from 'enzyme';
import mockRestaurant from 'assets/ts/test/mockRestaurant';
import RestaurantCard from './RestaurantCard';
import mockStore from 'assets/ts/test/mockStore';

jest.mock('react-redux', () => ({
  useSelector: () => mockStore
}));

it('should match the snapshot if it\'s not clicked', () => {
  const wrapper = shallow(
    <RestaurantCard restaurant={mockRestaurant} />
  );
  expect(wrapper).toMatchSnapshot();
});

it('should match the snapshot if it\'s clicked', () => {
  const wrapper = shallow(
    <RestaurantCard restaurant={mockRestaurant} />
  );
  wrapper.find('.restaurant-card').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
