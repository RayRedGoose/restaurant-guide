import "./SortingPanel.scss";
import React from "react";
import Filter from "Containers/Filter/Filter";
import SearchForm from "Containers/SearchForm/SearchForm";
import CleanFiltersButton from "Containers/CleanFiltersButton/CleanFiltersButton";
import SortFilter from "Containers/SortFilter/SortFilter";

const SortingPanel: React.FC = () => (
  <header className="sorting-panel">
    <SearchForm />
    <Filter type="states" />
    <Filter type="genres" />
    <Filter type="attires" />
    <SortFilter />
    <CleanFiltersButton />
  </header>
);

export default SortingPanel;
