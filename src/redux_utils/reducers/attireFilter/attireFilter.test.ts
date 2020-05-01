import attireFilterReducer from './attireFilter';
import {
  IActionObject,
  IAddAttireFilterAction,
  IRemoveAttireFilterAction,
  IRemoveAllFiltersAction
} from 'assets/ts/interfaces';

describe('attireFilterReducer', () => {
  it("should return initial value", () => {
    const mockAction: IActionObject = {
      type: ''
    };
    const expected: string = '';
    const result = attireFilterReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return new attire if type of action is ADD_ATTIRE_FILTER", () => {
    const mockAttire = 'casual';
    const mockAction: IAddAttireFilterAction = {
      type: 'ADD_ATTIRE_FILTER',
      attire: mockAttire
    };

    const expected: string = mockAttire;

    const result = attireFilterReducer('', mockAction);

    expect(result).toEqual(expected);
  });

  it("should return empty string if type of action is REMOVE_ATTIRE_FILTER", () => {
    const mockAction: IRemoveAttireFilterAction = {
      type: 'REMOVE_ATTIRE_FILTER'
    };

    const expected: string = '';

    const result = attireFilterReducer('american', mockAction);

    expect(result).toEqual(expected);
  });

  it("should return empty string if type of action is REMOVE_ALL_FILTERS", () => {
    const mockAction: IRemoveAllFiltersAction = {
      type: 'REMOVE_ALL_FILTERS'
    };

    const expected: string = '';

    const result = attireFilterReducer('american', mockAction);

    expect(result).toEqual(expected);
  });
});
