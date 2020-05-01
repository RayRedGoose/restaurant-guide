import './SortingPanel.scss';
import React from 'react';
import Filter from 'Containers/Filter/Filter';
import SearchForm from 'Containers/SearchForm/SearchForm';

const SortingPanel: React.FC = () => (
  <header className="sorting-panel">
    <Filter type="states" />
    <Filter type="genres" />
    <Filter type="attires" />
    <SearchForm />
  </header>
);

export default SortingPanel;
