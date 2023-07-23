import React from "react";
import "../../styles/home.css";
import CharacterList from "./CharacterList";


export const Home = () => (
  <div className="text-center mt-5">
    <div className="cardContainer">
      <CharacterList />
    </div>
  </div>
);
