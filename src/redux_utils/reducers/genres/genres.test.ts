import genresReducer from './genres';
import {
  IActionObject,
  IAddGenresAction
} from 'assets/ts/interfaces';

type emptyArray = [];

describe('genresReducer', () => {
  it("should return initial value", () => {
    const mockAction: IActionObject = {
      type: '',
      genres: undefined
    };
    const expected: emptyArray = [];
    const result = genresReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array of genres if type of action is ADD_GENRES", () => {
    const mockGenres: string[] = ['American'];
    const mockAction: IAddGenresAction = {
      type: 'ADD_GENRES',
      genres: mockGenres
    };

    const expected: string[] = mockGenres;

    const result = genresReducer([], mockAction);

    expect(result).toEqual(expected);
  });
});
