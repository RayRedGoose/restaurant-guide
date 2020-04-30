export interface IRestaurantObject {
  id: string,
  name: string,
  address1: string,
  city: string,
  state: string,
  zip: string,
  lat: string,
  long: string,
  telephone: string,
  tags: string,
  website: string,
  genre: string,
  hours: string,
  attire: string,
};

export interface IFilters {
  stateFilter: string,
  genreFilter: string,
  attireFilter: string,
  searchFilter: string
}

export interface IAppStore {
  restaurants: IRestaurantObject[],
  currentPage: number,
  maxPages: number,
  genres: string[],
  attires: string[],
  stateFilter: string,
  genreFilter: string,
  attireFilter: string,
  searchFilter: string
};

// ACTION CREATORS

export interface IActionObject {
  type: string,
  [key: string]: any
};

export interface IAddRestaurantAction {
  type: 'ADD_RESTAURANTS',
  restaurants: IRestaurantObject[]
};

export interface IChangeCurrentPageAction {
  type: 'CHANGE_CURRENT_PAGE',
  changer: number
};

export interface IAddMaxPagesAction {
  type: 'ADD_MAX_PAGES',
  total: number
};

export interface IAddGenresAction {
  type: 'ADD_GENRES',
  genres: string[]
};

export interface IAddAttiresAction {
  type: 'ADD_ATTIRES',
  attires: string[]
};

export interface IAddStateFilterAction {
  type: 'ADD_STATE_FILTER',
  state: string
};

export interface IRemoveStateFilterAction {
  type: 'REMOVE_STATE_FILTER'
};

export interface IAddGenreFilterAction {
  type: 'ADD_GENRE_FILTER',
  genre: string
};

export interface IRemoveGenreFilterAction {
  type: 'REMOVE_GENRE_FILTER'
};

export interface IAddAttireFilterAction {
  type: 'ADD_ATTIRE_FILTER',
  attire: string
};

export interface IRemoveAttireFilterAction {
  type: 'REMOVE_ATTIRE_FILTER'
};

export interface IAddSearchFilterAction {
  type: 'ADD_SEARCH_FILTER',
  search: string
};

export interface IRemoveSearchFilterAction {
  type: 'REMOVE_SEARCH_FILTER'
};
