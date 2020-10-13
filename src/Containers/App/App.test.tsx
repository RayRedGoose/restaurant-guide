import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import mockStore from "assets/ts/test/mockStore";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ({
    ...mockStore,
    displayPage: 1,
  }),
}));

describe("App", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
