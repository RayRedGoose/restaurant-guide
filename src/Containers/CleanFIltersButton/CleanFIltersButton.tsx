import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { removeAllFilters } from "redux_utils/actions";
import { IAppStore } from "assets/ts/interfaces";

const CleanFIltersButton: React.FC = () => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { attireFilter, genreFilter, stateFilter, searchFilter } = useSelector(
    (store: IAppStore) => ({
      attireFilter: store.attireFilter,
      genreFilter: store.genreFilter,
      searchFilter: store.searchFilter,
      stateFilter: store.stateFilter,
    })
  );

  const cleanFilters = (): void => {
    dispatch(removeAllFilters());
  };

  const checkEmptyFilters = (): boolean => {
    const checkAttire: boolean = attireFilter === "";
    const checkGenre: boolean = genreFilter === "";
    const checkSearch: boolean = searchFilter === "";
    const checkState: boolean = stateFilter === "";

    return checkAttire && checkGenre && checkSearch && checkState;
  };

  const rerendering = () => {
    const isEmpty: boolean = checkEmptyFilters();
    return !isEmpty ? setIsDisplayed(true) : setIsDisplayed(false);
  };

  useEffect(rerendering, [
    attireFilter,
    genreFilter,
    stateFilter,
    searchFilter,
  ]);

  return isDisplayed ? (
    <button
      className="clean-btn"
      onClick={cleanFilters}
      onKeyPress={cleanFilters}
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
  ) : (
    <div />
  );
};

export default CleanFIltersButton;
