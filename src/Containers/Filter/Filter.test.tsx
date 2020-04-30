import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';
import {
  addStateFilter, removeStateFilter,
  addGenreFilter, removeGenreFilter,
  addAttireFilter, removeAttireFilter
} from 'redux_utils/actions';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ({
    genres: ['american'],
    attires: ['casual']
  })
}));

jest.mock('redux_utils/actions');

describe("Filter", () => {
  let wrapper: any;

  it('should match the snapshot if type is states', () => {
    wrapper = shallow(<Filter type="states" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if type is genres', () => {
    wrapper = shallow(<Filter type="genres" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if type is attires', () => {
    wrapper = shallow(<Filter type="attires" />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("Click Events", () => {
    beforeEach(() => {
      wrapper = shallow(<Filter type="genres" />);
    });

    it('should show unordered list if title is clicked', () => {
      let ul: JSX.Element = wrapper.find('ul');
      expect(ul).toHaveLength(0);
      wrapper.find('h3').simulate('click');

      ul = wrapper.find('ul');
      expect(ul).toHaveLength(1);
    });

    it('should hide opened unordered list if title is clicked again', () => {
      wrapper.find('h3').simulate('click');
      let ul: JSX.Element = wrapper.find('ul');
      expect(ul).toHaveLength(1);

      wrapper.find('h3').simulate('click');
      ul = wrapper.find('ul');
      expect(ul).toHaveLength(0);
    });

    it('should change title if list element is chosen', () => {
      let title = wrapper.find('h3');
      title.simulate('click');
      let firestTitleText = title.text();
      expect(firestTitleText).toEqual('all genres');

      const element = wrapper.find('li:last-child');
      const elementText = 'american';
      element.simulate('click', {
        target: { innerText: elementText }
      });
      title = wrapper.find('h3');
      const secondTitleText = title.text();
      expect(secondTitleText).toEqual(elementText);
    });

    it('should hide opened unordered list if list element is chosen', () => {
      wrapper.find('h3').simulate('click');
      let ul: JSX.Element = wrapper.find('ul');
      expect(ul).toHaveLength(1);

      const element = wrapper.find('li:last-child');
      element.simulate('click', {
        target: { innerText: 'american' }
      });
      ul = wrapper.find('ul');
      expect(ul).toHaveLength(0);
    });
  });

  describe("adding action creators calls", () => {
    it('should call addStateFilter with chosen state after click', () => {
      const mockState: string = 'CO';
      wrapper = shallow(<Filter type="states" />);
      wrapper.find('h3').simulate('click');

      wrapper.find('li:last-child').simulate('click', {
        target: { innerText: mockState }
      });
      expect(addStateFilter).toHaveBeenCalledWith(mockState);
    });

    it('should call addGenreFilter with chosen state after click', () => {
      const mockGenre: string = 'american';
      wrapper = shallow(<Filter type="genres" />);
      wrapper.find('h3').simulate('click');

      wrapper.find('li:last-child').simulate('click', {
        target: { innerText: mockGenre }
      });
      expect(addGenreFilter).toHaveBeenCalledWith(mockGenre);
    });

    it('should call addAttireFilter with chosen state after click', () => {
      const mockAttire: string = 'casual';
      wrapper = shallow(<Filter type="attires" />);
      wrapper.find('h3').simulate('click');

      wrapper.find('li:last-child').simulate('click', {
        target: { innerText: mockAttire }
      });
      expect(addAttireFilter).toHaveBeenCalledWith(mockAttire);
    });
  });

  describe("removing action creators calls", () => {
    it('should call removeStateFilter after first list element was click', () => {
      wrapper = shallow(<Filter type="states" />);
      wrapper.find('h3').simulate('click');

      wrapper.find('li:first-child').simulate('click');
      expect(removeStateFilter).toHaveBeenCalled();
    });

    it('should call removeGenreFilter after first list element was click', () => {
      wrapper = shallow(<Filter type="genres" />);
      wrapper.find('h3').simulate('click');

      wrapper.find('li:first-child').simulate('click');
      expect(removeGenreFilter).toHaveBeenCalled();
    });

    it('should call removeAttireFilter after first list element was click', () => {
      wrapper = shallow(<Filter type="attires" />);
      wrapper.find('h3').simulate('click');

      wrapper.find('li:first-child').simulate('click');
      expect(removeAttireFilter).toHaveBeenCalled();
    });
  });
});
