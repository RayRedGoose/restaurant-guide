import React, { useState, useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IAppStore, sortingTypes } from "assets/ts/interfaces";
import { addSortFilter } from "redux_utils/actions";
import { handleFocus, handleBlur } from "./events";

const SortFilter: React.FC = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState<sortingTypes>("name");
  const sortFilter = useSelector((store: IAppStore) => store.sortFilter);

  useEffect(() => {
    setActive(sortFilter);
  }, [sortFilter]);

  const toggleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    e.target.size = 1;
    const selectedValue: string = e.target.value;

    const validatedValue = (): sortingTypes => {
      return selectedValue === "name" ||
        selectedValue === "state" ||
        selectedValue === "name-reverse" ||
        selectedValue === "state-reverse"
        ? selectedValue
        : "name";
    };

    setActive(validatedValue());
    dispatch(addSortFilter(validatedValue()));
  };

  return (
    <section className="filter" id="sorting">
      <select
        onChange={toggleFilter}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={active}
      >
        <option value="name">name (A-Z)</option>
        <option value="name-reverse">name (Z-A) </option>
        <option value="state">state (A-Z)</option>
        <option value="state-reverse">state (Z-A) </option>
      </select>
    </section>
  );
};

export default SortFilter;
