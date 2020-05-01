import './ErrorPage.scss';
import React from 'react';
import errorImage from 'assets/images/error.svg';

interface Props {
  error: string
}

const ErrorPage: React.FC<Props> = ({error}) => {
  return (
    <section className="error-card">
      <img src={errorImage} alt="error"/>
      <h2>{error}</h2>
    </section>
  );
};

export default ErrorPage;
