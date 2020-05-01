import './NoCard.scss';
import React from 'react';
import cafe from 'assets/images/cafe.svg';

const NoCard: React.FC = () => {
  return (
    <section className="no-card">
      <img src={cafe} alt="cafe"/>
      <h2>No restaurant to display!</h2>
    </section>
  );
};

export default NoCard;
