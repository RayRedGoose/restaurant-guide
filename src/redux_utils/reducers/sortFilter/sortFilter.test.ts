import sortFilterReducer from "./sortFilter";
import {
  IActionObject,
  IAddSortFilterAction,
  IRemoveSortFilterAction,
  IRemoveAllFiltersAction,
} from "assets/ts/interfaces";

describe("sortFilterReducer", () => {
  it("should return initial value", () => {
    const mockAction: IActionObject = {
      type: "",
      sort: undefined,
    };
    const expected: string = "name";
    const result = sortFilterReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return new sort value if type of action is ADD_SORT_FILTER", () => {
    const mockAction: IAddSortFilterAction = {
      type: "ADD_SORT_FILTER",
      sort: "state",
    };

    const expected: string = "state";

    const result = sortFilterReducer("", mockAction);

    expect(result).toEqual(expected);
  });

  it("should return name if type of action is REMOVE_SORT_FILTER", () => {
    const mockAction: IRemoveSortFilterAction = {
      type: "REMOVE_SORT_FILTER",
    };

    const expected: string = "name";

    const result = sortFilterReducer("state", mockAction);

    expect(result).toEqual(expected);
  });

  it("should return name if type of action is REMOVE_ALL_FILTERS", () => {
    const mockAction: IRemoveAllFiltersAction = {
      type: "REMOVE_ALL_FILTERS",
    };

    const expected: string = "name";

    const result = sortFilterReducer("state", mockAction);

    expect(result).toEqual(expected);
  });
});
