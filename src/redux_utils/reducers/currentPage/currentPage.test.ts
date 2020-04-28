import currentPageReducer from './currentPage';
import {
  IActionObject,
  IChangeCurrentPageAction
} from 'assets/ts/interfaces';

describe('currentPageReducer', () => {
  it("should return initial value", () => {
    const mockAction: IActionObject = {
      type: '',
      changer: undefined
    };
    const expected: number = 0;
    const result = currentPageReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return new number if type of action is CHANGE_CURRENT_PAGE", () => {
    const mockAction: IChangeCurrentPageAction = {
      type: 'CHANGE_CURRENT_PAGE',
      changer: 1
    };

    const expected: number = 1;

    const result = currentPageReducer(0, mockAction);

    expect(result).toEqual(expected);
  });
});
