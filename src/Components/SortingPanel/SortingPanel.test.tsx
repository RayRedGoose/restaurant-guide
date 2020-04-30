import React from 'react';
import { shallow } from 'enzyme';
import SortingPanel from './SortingPanel';

it('should match the snapshot', () => {
  const wrapper = shallow(<SortingPanel />);
  expect(wrapper).toMatchSnapshot();
});
