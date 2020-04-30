import { IActionObject } from 'assets/ts/interfaces';

const genres = (state = [], action: IActionObject) => {
  switch (action.type) {
    case 'ADD_GENRES':
      return action.genres;
    default:
      return state;
  }
};

export default genres;
