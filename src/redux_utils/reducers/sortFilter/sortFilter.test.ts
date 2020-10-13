import sortFilterReducer from "./sortFilter";
import {
  IActionObject,
  IAddSortFilterAction,
  IRemoveAllFiltersAction,
  sortingTypes,
} from "assets/ts/interfaces";

describe("sortFilterReducer", () => {
  it("should return initial value", () => {
    const mockAction: IActionObject = {
      type: "",
      sort: undefined,
    };
    const expected: sortingTypes = "name";
    const result = sortFilterReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return new sort value if type of action is ADD_SORT_FILTER", () => {
    const mockAction: IAddSortFilterAction = {
      type: "ADD_SORT_FILTER",
      sort: "state",
    };

    const expected: sortingTypes = "state";

    const result = sortFilterReducer("", mockAction);

    expect(result).toEqual(expected);
  });

  it("should return name if type of action is REMOVE_ALL_FILTERS", () => {
    const mockAction: IRemoveAllFiltersAction = {
      type: "REMOVE_ALL_FILTERS",
    };

    const expected: sortingTypes = "name";

    const result = sortFilterReducer("state", mockAction);

    expect(result).toEqual(expected);
  });
});
