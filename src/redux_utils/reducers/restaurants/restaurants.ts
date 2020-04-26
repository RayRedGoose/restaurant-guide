import { IActionObject } from 'assets/ts/interfaces';

const restaurants = (state = [], action: IActionObject) => {
  switch (action.type) {
    case 'ADD_RESTAURANTS':
      return action.restaurants;
    default:
      return state;
  }
};

export default restaurants;
