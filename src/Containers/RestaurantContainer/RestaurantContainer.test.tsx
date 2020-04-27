import React from 'react';
import { shallow } from 'enzyme';
import mockRestaurant from 'assets/ts/test/mockRestaurant';
import RestaurantContainer from './RestaurantContainer';


jest.mock('react-redux', () => ({
  useSelector: () => [mockRestaurant]
}));

it('should match the snapshot', () => {
  const wrapper = shallow(<RestaurantContainer />);
  expect(wrapper).toMatchSnapshot();
});
