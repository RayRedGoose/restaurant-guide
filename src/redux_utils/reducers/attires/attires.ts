import { IActionObject } from 'assets/ts/interfaces';

const attires = (state = [], action: IActionObject) => {
  switch (action.type) {
    case 'ADD_ATTIRES':
      return action.attires;
    default:
      return state;
  }
};

export default attires;
