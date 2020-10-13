import "./Pagination.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppStore } from "assets/ts/interfaces";
import { changeCurrentPage } from "redux_utils/actions";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { displayPage, maxPages } = useSelector((store: IAppStore) => ({
    displayPage: store.currentPage + 1,
    maxPages: store.maxPages,
  }));

  const decreaseCounter = (): void => {
    if (displayPage > 1) dispatch(changeCurrentPage(-1));
  };

  const increaseCounter = (): void => {
    if (displayPage < maxPages) dispatch(changeCurrentPage(1));
  };

  return (
    <footer className="pagination">
      <button
        className="pagination-btn"
        onClick={decreaseCounter}
        style={{ opacity: `${displayPage > 1 ? 1 : 0}` }}
      >
        Previous page
      </button>
      <p className="pages">{`${displayPage} / ${maxPages}`}</p>
      <button
        className="pagination-btn"
        onClick={increaseCounter}
        style={{ opacity: `${displayPage < maxPages ? 1 : 0}` }}
      >
        Next page
      </button>
    </footer>
  );
};

export default Pagination;
