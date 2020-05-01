import './RestaurantContainer.scss';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { applyFilters, checkEmptyFilters } from '_utils';
import { IAppStore, IRestaurantObject, IFilters } from 'assets/ts/interfaces';
import RestaurantCard from 'Containers/RestaurantCard/RestaurantCard';
import Pagination from 'Containers/Pagination/Pagination';

const RestaurantContainer: React.FC = () => {
  const {
    restaurants,
    currentPage,
    stateFilter,
    genreFilter,
    attireFilter,
    searchFilter,
  } = useSelector((store: IAppStore) => store);

  const filters: IFilters = {
    stateFilter,
    genreFilter,
    attireFilter,
    searchFilter,
  };

  const [displayed, setDisplayed] = useState<IRestaurantObject[]>([]);

  const shortDisplayed = (): void => {
    const increment: number = 10 * currentPage;
    const shorted: IRestaurantObject[] = restaurants
      .slice(0 + increment, 9 + increment);
    setDisplayed(shorted);
  };

  useEffect(shortDisplayed, [currentPage]);

  const filterRestaurants = (): IRestaurantObject[] => applyFilters(restaurants, filters);
  const checkResult = checkEmptyFilters(filters);

  const usedRestaurants: IRestaurantObject[] = (checkResult)
    ? filterRestaurants()
    : displayed;

  const restaurantCards: JSX.Element[] = usedRestaurants
    .map((rest: IRestaurantObject, ind: number) => (
      <RestaurantCard key={`restaurant${ind}`} restaurant={rest} />
    ));

  return (
    <main className="restaurants-container">
      { restaurantCards }
      { !checkResult && <Pagination /> }
    </main>
  );
};

export default RestaurantContainer;
