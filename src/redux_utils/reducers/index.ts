import { combineReducers } from 'redux';
import restaurants from './restaurants/restaurants';
import currentPage from './currentPage/currentPage';
import maxPages from './maxPages/maxPages';

const rootReducer = combineReducers({
  restaurants,
  currentPage,
  maxPages
});

export default rootReducer;
