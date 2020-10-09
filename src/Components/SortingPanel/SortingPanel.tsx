import "./SortingPanel.scss";
import React from "react";
import Filter from "Containers/Filter/Filter";
import SearchForm from "Containers/SearchForm/SearchForm";
import { removeAllFilters } from "redux_utils/actions";
import { useDispatch } from "react-redux";

const SortingPanel: React.FC = () => {
  const dispatch = useDispatch();

  const cleanFilters = (): void => {
    dispatch(removeAllFilters());
  };

  return (
    <header className="sorting-panel">
      <SearchForm />
      <Filter type="states" />
      <Filter type="genres" />
      <Filter type="attires" />
      <button className="clean-btn" onClick={cleanFilters}>
        Clean
      </button>
    </header>
  );
};

export default SortingPanel;
