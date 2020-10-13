import React from "react";
import { shallow } from "enzyme";
import Pagination from "./Pagination";
import { changeCurrentPage } from "redux_utils/actions";

const mockDispatch = jest.fn();
let mockPages = {
  displayPage: 2,
  maxPages: 6,
};

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => mockPages,
}));
jest.mock("redux_utils/actions");

describe("Pagination", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Pagination />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should use data from the store", () => {
    const text = wrapper.find(".pages");
    expect(text.text()).toEqual("2 / 6");
  });

  describe("Click Events", () => {
    it("should call changeCurrentPage with -1 when previous page button is clicked", () => {
      const firstButton = wrapper.find(".pagination-btn").at(0);
      firstButton.simulate("click");

      expect(changeCurrentPage).toHaveBeenCalledWith(-1);
    });

    it("should call changeCurrentPage with 1 when next page button is clicked", () => {
      const secondButton = wrapper.find(".pagination-btn").at(1);
      secondButton.simulate("click");

      expect(changeCurrentPage).toHaveBeenCalledWith(1);
    });

    it("should hide previous page button when number of page equal 1", () => {
      mockPages = {
        displayPage: 1,
        maxPages: 6,
      };
      const wrapper = shallow(<Pagination />);
      const button = wrapper.find(".pagination-btn").at(0);

      expect(button.prop("style")).toEqual({ opacity: "0" });
    });

    it("should show previous page button when number of page more than 1", () => {
      mockPages = {
        displayPage: 2,
        maxPages: 6,
      };
      const wrapper = shallow(<Pagination />);
      const button = wrapper.find(".pagination-btn").at(0);

      expect(button.prop("style")).toEqual({ opacity: "1" });
    });

    it("should hide next page button when number of page equal maxPages", () => {
      mockPages = {
        displayPage: 6,
        maxPages: 6,
      };
      const wrapper = shallow(<Pagination />);
      const button = wrapper.find(".pagination-btn").at(1);

      expect(button.prop("style")).toEqual({ opacity: "0" });
    });

    it("should show next page button when number of page more maxPages", () => {
      mockPages = {
        displayPage: 2,
        maxPages: 6,
      };
      const wrapper = shallow(<Pagination />);
      const button = wrapper.find(".pagination-btn").at(1);

      expect(button.prop("style")).toEqual({ opacity: "1" });
    });
  });
});
