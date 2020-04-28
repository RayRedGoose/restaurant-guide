import './RestaurantContainer.scss';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IAppStore, IRestaurantObject } from 'assets/ts/interfaces';
import RestaurantCard from 'Components/RestaurantCard/RestaurantCard';
import Pagination from 'Containers/Pagination/Pagination';

const RestaurantContainer: React.FC = () => {
  const { restaurants, currentPage } = useSelector((store: IAppStore) => ({
    restaurants: store.restaurants,
    currentPage: store.currentPage
  }));

  const [ displayed, setDisplayed ] = useState<IRestaurantObject[]>([]);

  const shortDisplayed = (): void => {
    const increment: number = 10*currentPage;
    const shorted: IRestaurantObject[] = restaurants
      .slice(0 + increment, 9+increment);
    setDisplayed(shorted);
  };

  useEffect(shortDisplayed, [ currentPage ]);

  const restaurantCards: JSX.Element[] = displayed
    .map((rest: IRestaurantObject, ind: number) => (
      <RestaurantCard key={'restaurant' + ind} restaurant={rest} />
    ));

  return (
    <main className="restaurants-container">
      { restaurantCards }
      <Pagination />
    </main>
  );
};

export default RestaurantContainer;
