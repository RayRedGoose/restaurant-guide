import { IActionObject } from 'assets/ts/interfaces';

const attireFilter = (state = '', action: IActionObject) => {
  switch (action.type) {
    case 'ADD_ATTIRE_FILTER':
      return action.attire;
    case 'REMOVE_ATTIRE_FILTER':
      return '';
    case 'REMOVE_ALL_FILTERS':
      return '';
    default:
      return state;
  }
};

export default attireFilter;
