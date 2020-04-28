import { IActionObject } from 'assets/ts/interfaces';

const currentPage = (state = 0, action: IActionObject) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_PAGE':
      return state + action.changer;
    default:
      return state;
  }
};

export default currentPage;
