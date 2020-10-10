import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { removeAllFilters } from "redux_utils/actions";

const CleanFIltersButton: React.FC = () => {
  const dispatch = useDispatch();

  const cleanFilters = (): void => {
    dispatch(removeAllFilters());
  };

  return (
    <button
      className="clean-btn"
      onClick={cleanFilters}
      onKeyPress={cleanFilters}
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
};

export default CleanFIltersButton;
