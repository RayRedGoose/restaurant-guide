import maxPagesReducer from './maxPages';
import {
  IActionObject,
  IAddMaxPages
} from 'assets/ts/interfaces';

describe('maxPagesReducer', () => {
  it("should return initial value", () => {
    const mockAction: IActionObject = {
      type: '',
      changer: undefined
    };
    const expected: number = 0;
    const result = maxPagesReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return new number if type of action is ADD_MAX_PAGES", () => {
    const mockAction: IAddMaxPages = {
      type: 'ADD_MAX_PAGES',
      total: 23
    };

    const expected: number = 2;

    const result = maxPagesReducer(0, mockAction);

    expect(result).toEqual(expected);
  });
});
