import * as I from "assets/ts/interfaces";
import mockRestaurant from "assets/ts/test/mockRestaurant";
import * as actions from "../actions";

describe("Add all restaurants function", () => {
  it("should return object with a type of ADD_RESTAURANTS when addRestaurants is called", () => {
    const mockRestaurants: I.IRestaurantObject[] = [mockRestaurant];

    const expected: I.IAddRestaurantAction = {
      type: "ADD_RESTAURANTS",
      restaurants: mockRestaurants,
    };

    const result = actions.addRestaurants(mockRestaurants);

    expect(result).toEqual(expected);
  });
});

describe("Change pages functions", () => {
  it("should return object with a type of CHANGE_CURRENT_PAGE when changeCurrentPage is called", () => {
    const expected: I.IChangeCurrentPageAction = {
      type: "CHANGE_CURRENT_PAGE",
      changer: 1,
    };

    const result = actions.changeCurrentPage(1);

    expect(result).toEqual(expected);
  });

  it("should return object with a type of ADD_MAX_PAGES when addMaxPages is called", () => {
    const expected: I.IAddMaxPagesAction = {
      type: "ADD_MAX_PAGES",
      total: 20,
    };

    const result = actions.addMaxPages(20);

    expect(result).toEqual(expected);
  });
});

describe("Add genres", () => {
  it("should return object with a type of ADD_GENRES when addGenres is called", () => {
    const mockGenres: string[] = ["seafood"];
    const expected: I.IAddGenresAction = {
      type: "ADD_GENRES",
      genres: mockGenres,
    };

    const result = actions.addGenres(mockGenres);

    expect(result).toEqual(expected);
  });
});

describe("Add attires", () => {
  it("should return object with a type of ADD_ATTIRES when addAttires is called", () => {
    const mockAttires: string[] = ["casual"];
    const expected: I.IAddAttiresAction = {
      type: "ADD_ATTIRES",
      attires: mockAttires,
    };

    const result = actions.addAttires(mockAttires);

    expect(result).toEqual(expected);
  });
});

describe("Filter", () => {
  it("should return object with a type of ADD_STATE_FILTER when addStateFilter is called", () => {
    const mockState: string = "CO";
    const expected: I.IAddStateFilterAction = {
      type: "ADD_STATE_FILTER",
      state: mockState,
    };

    const result = actions.addStateFilter(mockState);

    expect(result).toEqual(expected);
  });

  it("should return object with a type of REMOVE_STATE_FILTER when removeStateFilter is called", () => {
    const expected: I.IRemoveStateFilterAction = {
      type: "REMOVE_STATE_FILTER",
    };

    const result = actions.removeStateFilter();

    expect(result).toEqual(expected);
  });

  it("should return object with a type of ADD_GENRE_FILTER when addGenreFilter is called", () => {
    const mockGenre: string = "american";
    const expected: I.IAddGenreFilterAction = {
      type: "ADD_GENRE_FILTER",
      genre: mockGenre,
    };

    const result = actions.addGenreFilter(mockGenre);

    expect(result).toEqual(expected);
  });

  it("should return object with a type of REMOVE_GENRE_FILTER when removeGenreFilter is called", () => {
    const expected: I.IRemoveGenreFilterAction = {
      type: "REMOVE_GENRE_FILTER",
    };

    const result = actions.removeGenreFilter();

    expect(result).toEqual(expected);
  });

  it("should return object with a type of ADD_ATTIRE_FILTER when addAttireFilter is called", () => {
    const mockAttire: string = "casual";
    const expected: I.IAddAttireFilterAction = {
      type: "ADD_ATTIRE_FILTER",
      attire: mockAttire,
    };

    const result = actions.addAttireFilter(mockAttire);

    expect(result).toEqual(expected);
  });

  it("should return object with a type of REMOVE_ATTIRE_FILTER when removeAttireFilter is called", () => {
    const expected: I.IRemoveAttireFilterAction = {
      type: "REMOVE_ATTIRE_FILTER",
    };

    const result = actions.removeAttireFilter();

    expect(result).toEqual(expected);
  });

  it("should return object with a type of ADD_SEARCH_FILTER when addSearchFilter is called", () => {
    const mockSearch: string = "Lobster";
    const expected: I.IAddSearchFilterAction = {
      type: "ADD_SEARCH_FILTER",
      search: mockSearch,
    };

    const result = actions.addSearchFilter(mockSearch);

    expect(result).toEqual(expected);
  });

  it("should return object with a type of REMOVE_SEARCH_FILTER when removeSearchFilter is called", () => {
    const expected: I.IRemoveSearchFilterAction = {
      type: "REMOVE_SEARCH_FILTER",
    };

    const result = actions.removeSearchFilter();

    expect(result).toEqual(expected);
  });

  it("should return object with a type of ADD_SORT_FILTER when addSortFilter is called", () => {
    const mockSort: string = "state";
    const expected: I.IAddSortFilterAction = {
      type: "ADD_SORT_FILTER",
      sort: mockSort,
    };

    const result = actions.addSortFilter(mockSort);

    expect(result).toEqual(expected);
  });

  it("should return object with a type of REMOVE_SORT_FILTER when removeSortFilter is called", () => {
    const expected: I.IRemoveSortFilterAction = {
      type: "REMOVE_SORT_FILTER",
    };

    const result = actions.removeSortFilter();

    expect(result).toEqual(expected);
  });

  it("should return object with a type of REMOVE_ALL_FILTERS when removeAllFilters is called", () => {
    const expected: I.IRemoveAllFiltersAction = {
      type: "REMOVE_ALL_FILTERS",
    };

    const result = actions.removeAllFilters();

    expect(result).toEqual(expected);
  });
});
