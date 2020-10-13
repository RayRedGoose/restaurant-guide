import { IActionObject } from "assets/ts/interfaces";

const sortFilter = (sort = "name", action: IActionObject) => {
  switch (action.type) {
    case "ADD_SORT_FILTER":
      return action.sort;
    case "REMOVE_ALL_FILTERS":
      return "name";
    default:
      return sort;
  }
};

export default sortFilter;
