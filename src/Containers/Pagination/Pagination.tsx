import './Pagination.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAppStore } from 'assets/ts/interfaces';
import { changeCurrentPage } from 'redux_utils/actions'

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { displayPage, maxPages } = useSelector((store: IAppStore) => ({
    displayPage: store.currentPage + 1,
    maxPages: store.maxPages
  }));

  const decreaseCounter = (): void => {
    if (displayPage > 1) dispatch(changeCurrentPage(-1));
  };

  const increaseCounter = () : void => {
    if (displayPage < maxPages) dispatch(changeCurrentPage(1));
  }

  return (
    <footer className="pagination">
      { displayPage > 1 &&
        <button
          id="prev-page-btn"
          onClick={() => decreaseCounter()}> previous page </button>
      }
      <p className="pages">{`${displayPage} / ${maxPages}`}</p>
      { displayPage < maxPages &&
        <button
          id="next-page-btn"
          onClick={() => increaseCounter()}> next page </button>}
    </footer>
  );
};

export default Pagination;
