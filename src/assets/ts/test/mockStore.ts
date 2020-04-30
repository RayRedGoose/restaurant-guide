import { IAppStore, IRestaurantObject } from '../interfaces';
import mockRestaurant, { mockRestaurantAdditional } from './mockRestaurant';

let mockRestaurants: IRestaurantObject[] = [mockRestaurant];
mockRestaurants[9] = mockRestaurantAdditional;

const mockStore: IAppStore = {
  restaurants: mockRestaurants,
  currentPage: 0,
  maxPages: 3,
  genres: ['american'],
  attires: ['casual'],
  stateFilter: '',
  genreFilter: '',
  attireFilter: '',
  searchFilter: ''
};

export default mockStore;
