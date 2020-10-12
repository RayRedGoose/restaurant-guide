import "./RestaurantCard.scss";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faAngleDoubleRight,
  faBriefcase,
  faGlasses,
  faUserTie,
  faTshirt,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

import { IRestaurantObject, IAppStore } from "assets/ts/interfaces";
import Map, { Props as MapProps } from "Components/Map/Map";

interface Props {
  restaurant: IRestaurantObject;
}

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  const [isClicked, setClicked] = useState<boolean>(false);
  const {
    name,
    city,
    state,
    telephone,
    genre,
    hours,
    attire,
    address1,
    lat,
    long,
    zip,
    tags,
    website,
  } = restaurant;
  const store = useSelector((store: IAppStore) => store);

  useEffect(() => {
    setClicked(false);
  }, [store]);

  const toggleCard = (): void => setClicked(!isClicked);

  const cityNew = city.replace(/,/g, ", ");

  const mapProps: MapProps = {
    name,
    longitude: parseFloat(long),
    latitude: parseFloat(lat),
  };

  const genreBlocks: JSX.Element[] = genre
    .split(",")
    .map((gnr: string, ind: number) => <p key={gnr + ind}>{gnr}</p>);

  const openHours: JSX.Element[] = hours
    .split("; ")
    .map((hour: string, ind: number) => <p key={`hour${ind}`}>{hour}</p>);

  const tagLines: JSX.Element[] = tags
    .split(",")
    .reduce((acc: string[], tag: string) => {
      if (!acc.includes(tag)) acc = [...acc, tag];
      return acc;
    }, [])
    .map((tag: string, ind: number) => <p key={`tag${ind}`}>#{tag}</p>);

  const AttireLabel = (): JSX.Element => (
    <p className="attires">
      {attire.includes("business") && <FontAwesomeIcon icon={faBriefcase} />}
      {attire.includes("smart") && <FontAwesomeIcon icon={faGlasses} />}
      {attire === "formal" && <FontAwesomeIcon icon={faUserTie} />}
      {attire === "casual" && <FontAwesomeIcon icon={faTshirt} />}
      <p className="label">{attire}</p>
    </p>
  );

  const Location = (): JSX.Element => (
    <div className="location">
      <Map {...mapProps} />
      <h4>Address:</h4>
      <p>{address1}</p>
      <p>{`${cityNew}, ${state} ${zip}`}</p>
    </div>
  );

  return (
    <section className="restaurant-card" tabIndex={0}>
      <header>
        <section>{genreBlocks}</section>
      </header>
      <section
        className={isClicked ? "card-description opened" : "card-description"}
      >
        <h2>
          <a href={website} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </h2>
        {!isClicked ? (
          <main className="info">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {`${cityNew}, ${state}`}
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} />
              {telephone}
            </p>
          </main>
        ) : (
          <main className="open-hour">
            <h4>Open:</h4>
            {openHours}
          </main>
        )}
        {isClicked && <Location />}
      </section>
      {isClicked && (
        <section className="additional-info">
          <p className="tags">{tagLines}</p>
          <AttireLabel />
        </section>
      )}
      <footer tabIndex={0} onClick={toggleCard} onKeyPress={toggleCard}>
        <p>{!isClicked ? "More" : "Less"}</p>
        <FontAwesomeIcon icon={!isClicked ? faAngleDown : faAngleUp} />
      </footer>
    </section>
  );
};

export default RestaurantCard;
