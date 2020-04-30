import './Filter.scss';
import React, { useState, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import states from 'assets/ts/states';
import { IAppStore } from 'assets/ts/interfaces';
import {
  addStateFilter, removeStateFilter,
  addGenreFilter, removeGenreFilter,
  addAttireFilter, removeAttireFilter
} from 'redux_utils/actions';

interface Props {
  type: propType
};

interface Lists {
  states: string[],
  genres: string[],
  attires: string[]
};

type propType = 'states' | 'genres' | 'attires';

const Filter: React.FC<Props> = ({ type }) => {
  const dispatch = useDispatch();
  const initialText: string = 'all ' + type;
  const [ active, setActive ] = useState<string>(initialText);
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const { genres, attires } = useSelector((store: IAppStore) => ({
    genres: store.genres,
    attires: store.attires
  }));

  const lists: Lists = {
    states: states,
    genres: genres,
    attires: attires
  };

  const toggleList = () => setIsClicked(!isClicked);

  const chooseAddingCreator = (filter: string): void => {
    if (type === 'states') dispatch(addStateFilter(filter));
    if (type === 'genres') dispatch(addGenreFilter(filter));
    if (type === 'attires') dispatch(addAttireFilter(filter));
  };

  const setActiveFilter = (e: MouseEvent<HTMLElement>): void => {
    const li = e.target as HTMLElement;
    const text: string = li.innerText;
    setActive(text);
    chooseAddingCreator(text);
    setIsClicked(false);
  };

  const lines: JSX.Element[] = lists[type].map((li: string) => (
    <li key={li} onClick={setActiveFilter}>{li}</li>
  ));

  const removeFilter = (): void => {
    setActive(initialText);
    if (type === 'states') dispatch(removeStateFilter());
    if (type === 'genres') dispatch(removeGenreFilter());
    if (type === 'attires') dispatch(removeAttireFilter());
    setIsClicked(false);
  };

  return (
    <section className="filter">
      <h3 onClick={toggleList}>{ active }</h3>
      {isClicked &&
        <ul>
          <li onClick={removeFilter}>all</li>
          { lines }
        </ul>
      }
    </section>
  );
};

export default Filter;
