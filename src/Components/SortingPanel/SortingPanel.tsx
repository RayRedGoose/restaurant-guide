import './SortingPanel.scss';
import React from 'react';
import Filter from 'Containers/Filter/Filter';

const SortingPanel: React.FC = () => {
  return (
    <header className="sorting-panel">
      <Filter type='states' />
      <Filter type='genres' />
      <Filter type='attires' />
    </header>
  );
}

export default SortingPanel;
