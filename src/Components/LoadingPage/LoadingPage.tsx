import "./LoadingPage.scss";
import React from "react";
import loading from "assets/images/loading.svg";

const LoadingPage: React.FC = () => (
  <section className="loading">
    <img src={loading} alt="loading" />
    <h2>Loading...</h2>
  </section>
);

export default LoadingPage;
