import "./Filter.scss";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import states from "assets/ts/states";
import { IAppStore } from "assets/ts/interfaces";
import {
  addStateFilter,
  removeStateFilter,
  addGenreFilter,
  removeGenreFilter,
  addAttireFilter,
  removeAttireFilter,
} from "redux_utils/actions";
import { handleFocus, handleBlur } from "./events";

interface Props {
  type: propType;
}

interface Lists {
  states: string[];
  genres: string[];
  attires: string[];
}

type propType = "states" | "genres" | "attires";

const Filter: React.FC<Props> = ({ type }) => {
  const dispatch = useDispatch();
  const initialText: string = "all " + type;
  const [active, setActive] = useState<string>(initialText);
  const {
    genres,
    attires,
    attireFilter,
    genreFilter,
    stateFilter,
  } = useSelector((store: IAppStore) => ({
    genres: store.genres,
    attires: store.attires,
    attireFilter: store.attireFilter,
    genreFilter: store.genreFilter,
    stateFilter: store.stateFilter,
  }));

  const lists: Lists = {
    states: states,
    genres: genres,
    attires: attires,
  };

  const filters = {
    states: stateFilter,
    genres: genreFilter,
    attires: attireFilter,
  };

  const typeFilter: string = filters[type];

  useEffect(() => {
    if (typeFilter === "") setActive(initialText);
  }, [typeFilter, initialText]);

  const chooseAddingCreator = (filter: string): void => {
    if (type === "states") dispatch(addStateFilter(filter));
    if (type === "genres") dispatch(addGenreFilter(filter));
    if (type === "attires") dispatch(addAttireFilter(filter));
  };

  const removeFilter = (): void => {
    if (type === "states") dispatch(removeStateFilter());
    if (type === "genres") dispatch(removeGenreFilter());
    if (type === "attires") dispatch(removeAttireFilter());
  };

  const toggleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    e.target.size = 1;
    setActive(e.target.value);

    return e.target.value !== initialText
      ? chooseAddingCreator(e.target.value)
      : removeFilter();
  };

  const lines: JSX.Element[] = lists[type].map((li: string) => (
    <option key={li}>{li}</option>
  ));

  return (
    <section className="filter">
      <select
        onChange={toggleFilter}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={active}
      >
        <option>{"all " + type}</option>
        {lines}
      </select>
    </section>
  );
};

export default Filter;
