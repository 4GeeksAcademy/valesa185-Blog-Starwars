import React from "react";
import "../../styles/home.css";
import CharacterList from "../store/CharacterList";
import SpeciesList from "../store/SpeciesList";
import VehiclesList from "../store/VehiclesList";

export const Home = () => (
  <div className=" mt-3">
    <div className="cardContainer">
      <h1 className="ms-4">Characters</h1>
      <CharacterList />
      <h1 className="ms-4">Species</h1>
      <SpeciesList />
      <h1 className="ms-4">Vehicles</h1>
      <VehiclesList />
    </div>
  </div>
);
