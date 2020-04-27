import './RestaurantCard.scss';
import React from 'react';
import { IRestaurantObject } from 'assets/ts/interfaces';

interface Props {
  restaurant: IRestaurantObject
}

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  const { name, city, state, telephone, genre } = restaurant;
  const cityNew = city.replace(/,/g, ', ');
  const genreBlocks: JSX.Element[] = genre
    .split(',')
    .map((gnr: string, ind: number) => (
      <p key={gnr + ind} className='genre'>{gnr}</p>
    ));

  return (
    <section className="restaurant-card">
      <section className="card-description">
        <h2>{name}</h2>
        <main>
          {genreBlocks}
        </main>
      </section>
      <section className="card-information">
        <p className="location">{`${cityNew}, ${state}`}</p>
        <p className="phone">{telephone}</p>
      </section>
    </section>
  );
};

export default RestaurantCard;
