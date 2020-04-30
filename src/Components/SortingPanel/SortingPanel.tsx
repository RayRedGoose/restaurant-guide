import './SortingPanel.scss';
import React from 'react';
import Filter from 'Containers/Filter/Filter';
import SearchForm from 'Containers/SearchForm/SearchForm';

const SortingPanel: React.FC = () => (
  <header className="sorting-panel">
    <SearchForm />
    <Filter type="states" />
    <Filter type="genres" />
    <Filter type="attires" />
  </header>
);

export default SortingPanel;
