/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow } from "enzyme";
import SortingPanel from "./SortingPanel";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => "",
}));

it("should match the snapshot", () => {
  const wrapper = shallow(<SortingPanel />);

  expect(wrapper).toMatchSnapshot();
});
