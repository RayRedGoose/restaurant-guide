import React from 'react';
import { shallow } from 'enzyme';
import mockRestaurant from 'assets/ts/test/mockRestaurant';
import RestaurantCard from './RestaurantCard';

it('should match the snapshot', () => {  
  const wrapper = shallow(
    <RestaurantCard restaurant={mockRestaurant} />
  );
  expect(wrapper).toMatchSnapshot();
});
