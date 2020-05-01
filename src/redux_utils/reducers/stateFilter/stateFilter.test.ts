import stateFilterReducer from './stateFilter';
import {
  IActionObject,
  IAddStateFilterAction,
  IRemoveStateFilterAction,
  IRemoveAllFiltersAction
} from 'assets/ts/interfaces';

describe('stateFilterReducer', () => {
  it("should return initial value", () => {
    const mockAction: IActionObject = {
      type: '',
      state: undefined
    };
    const expected: string = '';
    const result = stateFilterReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return new state if type of action is ADD_STATE_FILTER", () => {
    const mockAction: IAddStateFilterAction = {
      type: 'ADD_STATE_FILTER',
      state: 'CO'
    };

    const expected: string = 'CO';

    const result = stateFilterReducer('', mockAction);

    expect(result).toEqual(expected);
  });

  it("should return empty string if type of action is REMOVE_STATE_FILTER", () => {
    const mockAction: IRemoveStateFilterAction = {
      type: 'REMOVE_STATE_FILTER'
    };

    const expected: string = '';

    const result = stateFilterReducer('CO', mockAction);

    expect(result).toEqual(expected);
  });

  it("should return empty string if type of action is REMOVE_ALL_FILTERS", () => {
    const mockAction: IRemoveAllFiltersAction = {
      type: 'REMOVE_ALL_FILTERS'
    };

    const expected: string = '';

    const result = stateFilterReducer('CO', mockAction);

    expect(result).toEqual(expected);
  });
});
