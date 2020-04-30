import { combineReducers } from 'redux';
import restaurants from './restaurants/restaurants';
import currentPage from './currentPage/currentPage';
import maxPages from './maxPages/maxPages';
import genres from './genres/genres';
import attires from './attires/attires';
import stateFilter from './stateFilter/stateFilter';
import genreFilter from './genreFilter/genreFilter';
import attireFilter from './attireFilter/attireFilter';
import searchFilter from './searchFilter/searchFilter';

const rootReducer = combineReducers({
  restaurants,
  currentPage,
  maxPages,
  genres,
  attires,
  stateFilter,
  genreFilter,
  attireFilter,
  searchFilter
});

export default rootReducer;
