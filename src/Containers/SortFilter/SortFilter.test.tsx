import React from "react";
import { shallow } from "enzyme";
import SortFilter from "./SortFilter";
import { addSortFilter } from "redux_utils/actions";
import { handleFocus, handleBlur } from "./events";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => "name",
}));

jest.mock("redux_utils/actions");
jest.mock("./events");

describe("SortFilter", () => {
  let wrapper: any;

  it("should match the snapshot if type is attires", () => {
    wrapper = shallow(<SortFilter />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleFocus on select focus", () => {
    wrapper = shallow(<SortFilter />);
    const defaultEvent = { target: { size: 1 } };

    wrapper.find("select").simulate("focus", defaultEvent);

    expect(handleFocus).toHaveBeenCalled();
  });

  it("should call handleBlur on select unfocus", () => {
    wrapper = shallow(<SortFilter />);
    const defaultEvent = { target: { size: 1 } };

    wrapper.find("select").simulate("blur", defaultEvent);

    expect(handleBlur).toHaveBeenCalled();
  });

  it("should call addSortFilter with value if option is selected", () => {
    const defaultEvent = {
      target: { size: 5, value: "state" },
    };

    wrapper.find("select").simulate("change", defaultEvent);

    expect(addSortFilter).toHaveBeenCalledWith("state");
  });
});
