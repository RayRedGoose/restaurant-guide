import './RestaurantCard.scss';
import React, { useState, useEffect } from 'react';
import { IRestaurantObject, IAppStore } from 'assets/ts/interfaces';
import open from 'assets/images/open.svg';
import attireImage from 'assets/images/attire.svg';
import tag from 'assets/images/tag.svg';
import address from 'assets/images/address.svg';
import { useSelector } from 'react-redux';

interface Props {
  restaurant: IRestaurantObject
}

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  const [ isClicked, setClicked ] = useState<boolean>(false);
  const {
    name, city, state, telephone, genre, hours, attire, address1, zip, tags, website
  } = restaurant;
  const store = useSelector((store: IAppStore) => store);

  useEffect(() => {
    setClicked(false);
  }, [store]);

  const cityNew = city.replace(/,/g, ', ');
  const genreBlocks: JSX.Element[] = genre
    .split(',')
    .map((gnr: string, ind: number) => (
      <p key={gnr + ind} className='genre'>{gnr}</p>
    ));
  const openHours: JSX.Element[] = hours.split('; ').map((hour: string, ind: number) => (
    <span key={`hour${ind}`}>{hour}</span>
  ));

  const attireLines: JSX.Element[] = attire.split(' ').map((att: string, ind: number) => (
    <span key={`att${ind}`}>{att}</span>
  ));

  const tagLines: JSX.Element[] = tags.split(',')
    .reduce((acc: string[], tag: string) => {
      if (!acc.includes(tag)) acc = [...acc, tag];
      return acc;
    }, [])
    .map((tag: string, ind: number) => (
      <span key={`tag${ind}`}>{tag}</span>
    ));

  const toggleCard = (): void => setClicked(!isClicked);

  return (
    <section className="restaurant-card" onClick={toggleCard}>
      <header>{genreBlocks}</header>
      <section className="card-description">
        <h2>{name}</h2>
        { isClicked &&
          <a href={website} target="_blank" rel="noopener noreferrer">See website</a> }
      </section>
      <section className="card-information">
        { !isClicked && <p className="location">{`${cityNew}, ${state}`}</p> }
        <p className="phone">{telephone}</p>
      </section>
      { isClicked &&
        <footer className="additional-info">
          <p id="open-hour">
            <img src={open} alt="open hours"/>
            {openHours}
          </p>
          <p id="attire-lines">
            <img src={attireImage} alt="attire"/>
            {attireLines}
          </p>
          <p>
            <img src={address} alt="address"/>
            <span>{address1}</span>
            <span>{`${cityNew}, ${state} ${zip}`}</span>
          </p>
          <p id="tags">
            <img src={tag} alt="tags"/>
            <div>{tagLines}</div>
          </p>
        </footer>
      }
    </section>
  );
};

export default RestaurantCard;
