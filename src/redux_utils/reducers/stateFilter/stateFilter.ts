import { IActionObject } from 'assets/ts/interfaces';

const stateFilter = (state = '', action: IActionObject) => {
  switch (action.type) {
    case 'ADD_STATE_FILTER':
      return action.state;
    case 'REMOVE_STATE_FILTER':
      return '';
    case 'REMOVE_ALL_FILTERS':
      return '';
    default:
      return state;
  }
};

export default stateFilter;
