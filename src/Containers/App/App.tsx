import './App.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRestaurants } from '_apiCalls/apiCalls';
import { addRestaurants } from 'redux_utils/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [ error, setError ] = useState<string>('');
  const [ loaded, setLoaded ] = useState<boolean>(false);
  const fetchRestaurants = async (): Promise<void> => {
    try {
      const restaurants = await getRestaurants();
      dispatch(addRestaurants(restaurants));
      setLoaded(true);
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
      { !loaded && <p>Loading ...</p> }
      { loaded && <p>Loading is ended!</p>}
      { error !== '' && <p>{ error }</p> }
    </div>
  );
}

export default App;
