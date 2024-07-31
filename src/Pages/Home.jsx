import React from "react";
import Hero from "../Components/Hero";
import PopularWedding from "../Components/PopularWedding";
import PopularParties from "../Components/PopularParties";
import PopularMeetups from "../Components/PopularMeetups";
import PopularSeminar from "../Components/PopularSeminar";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularWedding />
      <PopularParties />
      <PopularMeetups />
      <PopularSeminar />
    </div>
  );
};

export default Home;
