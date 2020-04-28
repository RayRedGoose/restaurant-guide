import './App.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IRestaurantObject } from 'assets/ts/interfaces';
import { sortByAlphabet } from '_utils';
import { getRestaurants } from '_apiCalls/apiCalls';
import { addRestaurants, addMaxPages } from 'redux_utils/actions';
import RestaurantContainer from 'Containers/RestaurantContainer/RestaurantContainer';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [ error, setError ] = useState<string>('');
  const [ loaded, setLoaded ] = useState<boolean>(false);

  const addToStore = (restaurants: IRestaurantObject[]): void => {
    const restaurantsSorted = sortByAlphabet(restaurants);
    dispatch(addRestaurants(restaurantsSorted));
    dispatch(addMaxPages(restaurants.length));
    setLoaded(true);
  }

  const fetchRestaurants = async (): Promise<void> => {
    try {
      const restaurants = await getRestaurants();
      if (restaurants !== undefined) addToStore(restaurants);
    }
    catch (error) {
      setLoaded(false);
      setError(error);
    }
  };

  const addRestaurantsToStore = (): void => { fetchRestaurants() };

  useEffect(addRestaurantsToStore, []);

  return (
    <div className="app">
      { !loaded && error === '' && <p>Loading ...</p> }
      { loaded && error === '' && <RestaurantContainer />}
      { error !== '' && <p>{ error }</p> }
    </div>
  );
}

export default App;
