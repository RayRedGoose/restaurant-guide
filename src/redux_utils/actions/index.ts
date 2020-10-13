import * as I from "assets/ts/interfaces";

export const addRestaurants = (
  restaurants: I.IRestaurantObject[]
): I.IAddRestaurantAction => ({
  type: "ADD_RESTAURANTS",
  restaurants: restaurants,
});

export const addGenres = (genres: string[]): I.IAddGenresAction => ({
  type: "ADD_GENRES",
  genres: genres,
});

export const addAttires = (attires: string[]): I.IAddAttiresAction => ({
  type: "ADD_ATTIRES",
  attires: attires,
});

export const changeCurrentPage = (
  changer: number
): I.IChangeCurrentPageAction => ({
  type: "CHANGE_CURRENT_PAGE",
  changer: changer,
});

export const addMaxPages = (total: number): I.IAddMaxPagesAction => ({
  type: "ADD_MAX_PAGES",
  total: total,
});

export const addStateFilter = (state: string): I.IAddStateFilterAction => ({
  type: "ADD_STATE_FILTER",
  state: state,
});

export const removeStateFilter = (): I.IRemoveStateFilterAction => ({
  type: "REMOVE_STATE_FILTER",
});

export const addGenreFilter = (genre: string): I.IAddGenreFilterAction => ({
  type: "ADD_GENRE_FILTER",
  genre: genre,
});

export const removeGenreFilter = (): I.IRemoveGenreFilterAction => ({
  type: "REMOVE_GENRE_FILTER",
});

export const addAttireFilter = (attire: string): I.IAddAttireFilterAction => ({
  type: "ADD_ATTIRE_FILTER",
  attire: attire,
});

export const removeAttireFilter = (): I.IRemoveAttireFilterAction => ({
  type: "REMOVE_ATTIRE_FILTER",
});

export const addSearchFilter = (search: string): I.IAddSearchFilterAction => ({
  type: "ADD_SEARCH_FILTER",
  search: search,
});

export const removeSearchFilter = (): I.IRemoveSearchFilterAction => ({
  type: "REMOVE_SEARCH_FILTER",
});

export const addSortFilter = (sort: string): I.IAddSortFilterAction => ({
  type: "ADD_SORT_FILTER",
  sort: sort,
});

export const removeSortFilter = (): I.IRemoveSortFilterAction => ({
  type: "REMOVE_SORT_FILTER",
});

export const removeAllFilters = (): I.IRemoveAllFiltersAction => ({
  type: "REMOVE_ALL_FILTERS",
});
