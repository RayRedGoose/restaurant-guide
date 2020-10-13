import React from "react";
import { shallow } from "enzyme";
import SortFilter from "./SortFilter";
import {
  addStateFilter,
  removeStateFilter,
  addGenreFilter,
  removeGenreFilter,
  addAttireFilter,
  removeAttireFilter,
} from "redux_utils/actions";
import { handleFocus, handleBlur } from "./events";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ({
    genres: ["american"],
    attires: ["casual"],
  }),
}));

jest.mock("redux_utils/actions");
jest.mock("./events");

describe.skip("SortFilter", () => {
  let wrapper: any;

  // it("should match the snapshot if type is attires", () => {
  //   wrapper = shallow(<Filter type="attires" />);
  //   expect(wrapper).toMatchSnapshot();
  // });

  it("should call handleFocus on select focus", () => {
    wrapper = shallow(<SortFilter type="genres" />);
    const defaultEvent = { target: { size: 1 } };

    wrapper.find("select").simulate("focus", defaultEvent);

    expect(handleFocus).toHaveBeenCalled();
  });

  it("should call handleBlur on select unfocus", () => {
    wrapper = shallow(<SortFilter type="genres" />);
    const defaultEvent = { target: { size: 1 } };

    wrapper.find("select").simulate("blur", defaultEvent);

    expect(handleBlur).toHaveBeenCalled();
  });

  describe("Genres Filter", () => {
    beforeEach(() => {
      wrapper = shallow(<SortFilter type="genres" />);
    });

    it("should match the snapshot if type is genres", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should call removeGenreFilter if selected option contains initial text", () => {
      const defaultEvent = {
        target: { size: 5, value: "all genres" },
      };

      wrapper.find("select").simulate("change", defaultEvent);

      expect(removeGenreFilter).toHaveBeenCalled();
    });

    it("should call addGenreFilter with new value (not initial text)", () => {
      const defaultEvent = {
        target: { size: 5, value: "seafood" },
      };

      wrapper.find("select").simulate("change", defaultEvent);

      expect(addGenreFilter).toHaveBeenCalledWith("seafood");
    });
  });

  describe("State Filter", () => {
    beforeEach(() => {
      wrapper = shallow(<SortFilter type="states" />);
    });

    it("should match the snapshot if type is genres", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should call removeStateFilter if selected option contains initial text", () => {
      const defaultEvent = {
        target: { size: 5, value: "all states" },
      };

      wrapper.find("select").simulate("change", defaultEvent);

      expect(removeStateFilter).toHaveBeenCalled();
    });

    it("should call addStateFilter with new value (not initial text)", () => {
      const defaultEvent = {
        target: { size: 5, value: "CA" },
      };

      wrapper.find("select").simulate("change", defaultEvent);

      expect(addStateFilter).toHaveBeenCalledWith("CA");
    });
  });

  describe("Attire Filter", () => {
    beforeEach(() => {
      wrapper = shallow(<SortFilter type="attires" />);
    });

    it("should match the snapshot if type is attires", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should call removeAttireFilter if selected option contains initial text", () => {
      const defaultEvent = {
        target: { size: 5, value: "all attires" },
      };

      wrapper.find("select").simulate("change", defaultEvent);

      expect(removeAttireFilter).toHaveBeenCalled();
    });

    it("should call addAttireFilter with new value (not initial text)", () => {
      const defaultEvent = {
        target: { size: 5, value: "casual" },
      };

      wrapper.find("select").simulate("change", defaultEvent);

      expect(addAttireFilter).toHaveBeenCalledWith("casual");
    });
  });
});
