import './RestaurantContainer.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { IAppStore, IRestaurantObject } from 'assets/ts/interfaces';
import RestaurantCard from 'Components/RestaurantCard/RestaurantCard';

const RestaurantContainer: React.FC = () => {
  const restaurants = useSelector((store: IAppStore) => store.restaurants);

  const restaurantCards: JSX.Element[] = restaurants
    .map((rest: IRestaurantObject, ind: number) => (
      <RestaurantCard key={'restaurant' + ind} restaurant={rest} />
    ));

  return (
    <main className="restaurants-container">
      { restaurantCards }
    </main>
  );
};

export default RestaurantContainer;
