/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount, shallow } from "enzyme";
import CleanFiltersButton from "./CleanFiltersButton";
import { removeAllFilters } from "redux_utils/actions";
jest.mock("redux_utils/actions");

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ({
    attireFilter: "casual",
    genreFilter: "seafood",
    searchFilter: "the",
    stateFilter: "CO",
  }),
}));

describe("CleanFiltersButton", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<CleanFiltersButton />);
  });

  it("should match the snapshot for empty filters", () => {
    const wrapper = shallow(<CleanFiltersButton />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot if there is any filter query", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call removeAllFilters after click", () => {
    wrapper.find("button").simulate("click");

    expect(removeAllFilters).toHaveBeenCalled();
  });

  it("should call removeAllFilters after key pressed", () => {
    wrapper.find("button").simulate("keypress");

    expect(removeAllFilters).toHaveBeenCalled();
  });
});
