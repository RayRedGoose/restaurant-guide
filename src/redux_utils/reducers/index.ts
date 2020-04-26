import { combineReducers } from 'redux';
import restaurants from './restaurants/restaurants';

const rootReducer = combineReducers({
  restaurants
});

export default rootReducer;
