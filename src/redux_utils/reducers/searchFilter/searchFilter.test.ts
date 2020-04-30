import searchFilterReducer from './searchFilter';
import {
  IActionObject,
  IAddSearchFilterAction,
  IRemoveSearchFilterAction
} from 'assets/ts/interfaces';

describe('searchFilterReducer', () => {
  it("should return initial value", () => {
    const mockAction: IActionObject = {
      type: ''
    };
    const expected: string = '';
    const result = searchFilterReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return new search if type of action is ADD_SEARCH_FILTER", () => {
    const mockSearch = 'american';
    const mockAction: IAddSearchFilterAction = {
      type: 'ADD_SEARCH_FILTER',
      search: mockSearch
    };

    const expected: string = mockSearch;

    const result = searchFilterReducer('', mockAction);

    expect(result).toEqual(expected);
  });

  it("should return empty string if type of action is REMOVE_SEARCH_FILTER", () => {
    const mockAction: IRemoveSearchFilterAction = {
      type: 'REMOVE_SEARCH_FILTER'
    };

    const expected: string = '';

    const result = searchFilterReducer('american', mockAction);

    expect(result).toEqual(expected);
  });
});
