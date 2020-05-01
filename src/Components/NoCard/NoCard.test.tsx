import React from 'react';
import { shallow } from 'enzyme';
import NoCard from './NoCard';

it('should match the snapshot', () => {
  const wrapper = shallow(<NoCard />);
  expect(wrapper).toMatchSnapshot();
});
