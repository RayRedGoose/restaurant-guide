/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount } from "enzyme";
import SearchForm from "./SearchForm";
import { addSearchFilter, removeSearchFilter } from "redux_utils/actions";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => "",
}));

jest.mock("redux_utils/actions");

describe("SearchForm", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<SearchForm />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot if input is not empty", () => {
    const input = wrapper.find("input");
    input.simulate("change", {
      target: { value: "query" },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("should change class of input if it's on focus", () => {
    const input = wrapper.find("input");
    expect(input.getDOMNode()).toHaveClass("closed");

    input.simulate("focus");

    expect(input.getDOMNode()).toHaveClass("opened");
  });

  it("should change class of input if it's not empty", () => {
    const input = wrapper.find("input");
    expect(input.getDOMNode()).toHaveClass("closed");

    input.simulate("change", {
      target: { value: "query" },
    });

    expect(input.getDOMNode()).toHaveClass("opened");
  });

  it("should update input state when change event occur", () => {
    const input = wrapper.find("input");
    expect(input.getDOMNode().value).toEqual("");

    input.simulate("change", {
      target: { value: "hi!" },
    });

    expect(input.getDOMNode().value).toEqual("hi!");
  });

  it("should call removeSearchFilter when change event fired with empty value", () => {
    const input = wrapper.find("input");
    input.simulate("change", {
      target: { value: "" },
    });

    expect(removeSearchFilter).toHaveBeenCalled();
  });

  it("should call addSearchFilter when form is submitted", () => {
    const input = wrapper.find("input");
    input.simulate("change", {
      target: { value: "query" },
    });

    wrapper.find("form").simulate("submit");

    expect(addSearchFilter).toHaveBeenCalledWith("query");
  });

  it("should call addSearchFilter when submit button is clicked", () => {
    const input = wrapper.find("input");
    input.simulate("change", {
      target: { value: "query" },
    });

    wrapper.find(".search-btn").simulate("click");

    expect(addSearchFilter).toHaveBeenCalledWith("query");
  });

  it("should call removeSearchFilter when clean button is clicked", () => {
    const input = wrapper.find("input");
    input.simulate("change", {
      target: { value: "hi!" },
    });

    const icon = wrapper.find(".remove-btn").at(0);
    icon.simulate("click");

    expect(removeSearchFilter).toHaveBeenCalled();
  });

  it("should clean input value after clean button is clicked", () => {
    const input = wrapper.find('input[type="text"]');
    input.simulate("change", {
      target: { value: "hi!" },
    });

    expect(input.getDOMNode().value).toEqual("hi!");

    const icon = wrapper.find(".remove-btn").at(0);
    icon.simulate("click");

    expect(input.getDOMNode().value).toEqual("");
  });
});
