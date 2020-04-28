import { IActionObject } from 'assets/ts/interfaces';

const maxPages = (state = 0, action: IActionObject) => {
  switch (action.type) {
    case 'ADD_MAX_PAGES':
      return parseInt((action.total / 10).toFixed());
    default:
      return state;
  }
};

export default maxPages;
