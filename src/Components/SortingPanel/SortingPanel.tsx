import "./SortingPanel.scss";
import React from "react";
import Filter from "Containers/Filter/Filter";
import SearchForm from "Containers/SearchForm/SearchForm";
import CleanFIltersButton from "Containers/CleanFIltersButton/CleanFIltersButton";

const SortingPanel: React.FC = () => (
  <header className="sorting-panel">
    <SearchForm />
    <Filter type="states" />
    <Filter type="genres" />
    <Filter type="attires" />
    <CleanFIltersButton />
  </header>
);

export default SortingPanel;
