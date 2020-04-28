import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';
import { changeCurrentPage } from 'redux_utils/actions';

const mockDispatch = jest.fn();
let mockPages = {
  displayPage: 2,
  maxPages: 6
};

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => mockPages
}));
jest.mock('redux_utils/actions');

describe("Pagination", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Pagination />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should use data from the store', () => {
    const text = wrapper.find('.pages');
    expect(text.text()).toEqual('2 / 6');
  });

  describe("Click Events", () => {
    it('should call changeCurrentPage with -1 when previous page button is clicked', () => {
      wrapper.find('#prev-page-btn').simulate('click');
      expect(changeCurrentPage).toHaveBeenCalledWith(-1);
    });

    it('should call changeCurrentPage with 1 when next page button is clicked', () => {
      wrapper.find('#next-page-btn').simulate('click');
      expect(changeCurrentPage).toHaveBeenCalledWith(1);
    });

    it('should hide previous page button when number of page equal 1', () => {
      mockPages = {
        displayPage: 1,
        maxPages: 6
      };
      const wrapper = shallow(<Pagination />);
      const button = wrapper.find('#prev-page-btn');
      expect(button).toHaveLength(0);
    });

    it('should hide next page button when number of page equal maxPages', () => {
      mockPages = {
        displayPage: 6,
        maxPages: 6
      };
      const wrapper = shallow(<Pagination />);
      const button = wrapper.find('#next-page-btn');
      expect(button).toHaveLength(0);
    });
  });
});
