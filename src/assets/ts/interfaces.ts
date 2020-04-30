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

export interface IAppStore {
  restaurants: IRestaurantObject[],
  currentPage: number,
  maxPages: number,
  genres: string[],
  attires: string[],
  stateFilter: string,
  genreFilter: string,
  attireFilter: string,
  searchFilter: ''
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
