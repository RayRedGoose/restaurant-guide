import { IActionObject } from 'assets/ts/interfaces';

const genreFilter = (state = '', action: IActionObject) => {
  switch (action.type) {
    case 'ADD_GENRE_FILTER':
      return action.genre;
    case 'REMOVE_GENRE_FILTER':
      return '';
    case 'REMOVE_ALL_FILTERS':
      return '';
    default:
      return state;
  }
};

export default genreFilter;
