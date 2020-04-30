import genreFilterReducer from './genreFilter';
import {
  IActionObject,
  IAddGenreFilterAction,
  IRemoveGenreFilterAction
} from 'assets/ts/interfaces';

describe('genreFilterReducer', () => {
  it("should return initial value", () => {
    const mockAction: IActionObject = {
      type: ''
    };
    const expected: string = '';
    const result = genreFilterReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return new genre if type of action is ADD_GENRE_FILTER", () => {
    const mockGenre = 'american';
    const mockAction: IAddGenreFilterAction = {
      type: 'ADD_GENRE_FILTER',
      genre: mockGenre
    };

    const expected: string = mockGenre;

    const result = genreFilterReducer('', mockAction);

    expect(result).toEqual(expected);
  });

  it("should return empty string if type of action is REMOVE_GENRE_FILTER", () => {
    const mockAction: IRemoveGenreFilterAction = {
      type: 'REMOVE_GENRE_FILTER'
    };

    const expected: string = '';

    const result = genreFilterReducer('american', mockAction);

    expect(result).toEqual(expected);
  });
});
