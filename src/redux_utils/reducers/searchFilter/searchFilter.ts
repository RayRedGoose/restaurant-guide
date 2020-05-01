import { IActionObject } from 'assets/ts/interfaces';

const searchFilter = (state = '', action: IActionObject) => {
  switch (action.type) {
    case 'ADD_SEARCH_FILTER':
      return action.search;
    case 'REMOVE_SEARCH_FILTER':
      return '';
    case 'REMOVE_ALL_FILTERS':
      return '';
    default:
      return state;
  }
};

export default searchFilter;
