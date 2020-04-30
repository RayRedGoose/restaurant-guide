import attiresReducer from './attires';
import {
  IActionObject,
  IAddAttiresAction
} from 'assets/ts/interfaces';

type emptyArray = [];

describe('attiresReducer', () => {
  it("should return initial value", () => {
    const mockAction: IActionObject = {
      type: '',
      attires: undefined
    };
    const expected: emptyArray = [];
    const result = attiresReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array of attires if type of action is ADD_GENRES", () => {
    const mockGenres: string[] = ['American'];
    const mockAction: IAddAttiresAction = {
      type: 'ADD_ATTIRES',
      attires: mockGenres
    };

    const expected: string[] = mockGenres;

    const result = attiresReducer([], mockAction);

    expect(result).toEqual(expected);
  });
});
