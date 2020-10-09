import "./SearchForm.scss";
import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addSearchFilter, removeSearchFilter } from "redux_utils/actions";
import { IAppStore } from "assets/ts/interfaces";

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("");
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const searchFilter = useSelector((state: IAppStore) => state.searchFilter);

  useEffect(() => {
    setQuery(searchFilter);
  }, [searchFilter]);

  const submitSearch = (e: FormEvent<HTMLElement>): void => {
    e.preventDefault();
    if (query !== "") dispatch(addSearchFilter(query));
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
    if (e.target.value === "") dispatch(removeSearchFilter());
  };

  const cleanInput = (): void => {
    setQuery("");
    dispatch(removeSearchFilter());
  };

  return (
    <form className="search-form" onSubmit={submitSearch}>
      <FontAwesomeIcon
        icon={faTimes}
        className={query === "" ? "none" : "remove-btn"}
        onClick={cleanInput}
      />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChanges}
        onFocus={() => setIsOpened(true)}
        onBlur={() => setIsOpened(false)}
        className={!isOpened && query === "" ? "closed" : "opened"}
      />
      <button className="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchForm;
