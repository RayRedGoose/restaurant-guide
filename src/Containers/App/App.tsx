import "./App.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRestaurantObject, IAppStore } from "assets/ts/interfaces";
import { sortRestaurants, getGenres, getAttire } from "_utils";
import { getRestaurants } from "_apiCalls/apiCalls";
import {
  addRestaurants,
  addMaxPages,
  addGenres,
  addAttires,
} from "redux_utils/actions";
import RestaurantContainer from "Containers/RestaurantContainer/RestaurantContainer";
import SortingPanel from "Components/SortingPanel/SortingPanel";
import LoadingPage from "Components/LoadingPage/LoadingPage";
import ErrorPage from "Components/ErrorPage/ErrorPage";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("");
  const [loaded, setLoaded] = useState<boolean>(false);
  const sortFilter = useSelector((store: IAppStore) => store.sortFilter);

  const addInfoToStore = (restaurants: IRestaurantObject[]): void => {
    const genres: string[] = getGenres(restaurants);
    dispatch(addGenres(genres));
    const attires: string[] = getAttire(restaurants);
    dispatch(addAttires(attires));
  };

  const addToStore = (restaurants: IRestaurantObject[]): void => {
    const restaurantsSorted = sortRestaurants(restaurants, sortFilter);
    dispatch(addRestaurants(restaurantsSorted));
    dispatch(addMaxPages(restaurants.length));
    setLoaded(true);
    addInfoToStore(restaurantsSorted);
  };

  const fetchRestaurants = async (): Promise<void> => {
    try {
      const restaurants = await getRestaurants();
      if (restaurants !== undefined) addToStore(restaurants);
    } catch (error) {
      setLoaded(false);
      setError(error.message);
    }
  };

  const addRestaurantsToStore = (): void => {
    fetchRestaurants();
  };

  useEffect(addRestaurantsToStore, []);

  return (
    <div className="app">
      <SortingPanel />
      {!loaded && error === "" && <LoadingPage />}
      {loaded && error === "" && <RestaurantContainer />}
      {error !== "" && <ErrorPage error={error} />}
    </div>
  );
};

export default App;
