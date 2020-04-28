import { IAppStore, IRestaurantObject } from '../interfaces';
import mockRestaurant, { mockRestaurantAdditional } from './mockRestaurant';

let mockRestaurants: IRestaurantObject[] = [mockRestaurant];
mockRestaurants[9] = mockRestaurantAdditional;

const mockStore: IAppStore = {
  restaurants: mockRestaurants,
  currentPage: 0,
  maxPages: 3
};

export default mockStore;
