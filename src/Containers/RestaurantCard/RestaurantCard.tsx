import "./RestaurantCard.scss";
import React, { useState, useEffect } from "react";
import { IRestaurantObject, IAppStore } from "assets/ts/interfaces";
import open from "assets/images/open.svg";
import tag from "assets/images/tag.svg";
import address from "assets/images/address.svg";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGlasses,
  faUserTie,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";

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
    zip,
    tags,
    website,
  } = restaurant;
  const store = useSelector((store: IAppStore) => store);

  useEffect(() => {
    setClicked(false);
  }, [store]);

  const cityNew = city.replace(/,/g, ", ");
  const genreBlocks: JSX.Element[] = genre
    .split(",")
    .map((gnr: string, ind: number) => (
      <p key={gnr + ind} className="genre">
        {gnr}
      </p>
    ));
  const openHours: JSX.Element[] = hours
    .split("; ")
    .map((hour: string, ind: number) => <span key={`hour${ind}`}>{hour}</span>);

  const tagLines: JSX.Element[] = tags
    .split(",")
    .reduce((acc: string[], tag: string) => {
      if (!acc.includes(tag)) acc = [...acc, tag];
      return acc;
    }, [])
    .map((tag: string, ind: number) => <span key={`tag${ind}`}>{tag}</span>);

  const toggleCard = (): void => setClicked(!isClicked);

  return (
    <section className="restaurant-card" onClick={toggleCard}>
      <header>
        {genreBlocks}
        <p id="attire">
          {attire.includes("business") && (
            <FontAwesomeIcon icon={faBriefcase} />
          )}
          {attire.includes("smart") && <FontAwesomeIcon icon={faGlasses} />}
          {attire === "formal" && <FontAwesomeIcon icon={faUserTie} />}
          {attire === "casual" && <FontAwesomeIcon icon={faTshirt} />}
          <span className="label">{attire}</span>
        </p>
      </header>
      <section className="card-description">
        <h2>{name}</h2>
        {isClicked && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            See website
          </a>
        )}
      </section>
      <section className="card-information">
        {!isClicked && <p className="location">{`${cityNew}, ${state}`}</p>}
        <p className="phone">{telephone}</p>
      </section>
      {isClicked && (
        <footer className="additional-info">
          <p id="open-hour">
            <img src={open} alt="open hours" />
            {openHours}
          </p>
          <p>
            <img src={address} alt="address" />
            <span>{address1}</span>
            <span>{`${cityNew}, ${state} ${zip}`}</span>
          </p>
          <p id="tags">
            <img src={tag} alt="tags" />
            <div>{tagLines}</div>
          </p>
        </footer>
      )}
    </section>
  );
};

export default RestaurantCard;
