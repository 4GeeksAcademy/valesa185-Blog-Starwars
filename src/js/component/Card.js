import React from "react";
import { Link } from "react-router-dom";
import { useCharacterContext } from "../store/CharacterContext";

const Card = ({ character }) => {
  const { id, name, image, description1, description2, description3 } =
    character;

  const { addToFavorites } = useCharacterContext();

  const handleAddToFavorites = () => {
    addToFavorites(name); // Add the character's name to the favorites list
  };

  return (
    <div className="card" style={{ width: "15rem" }}>
      <img
        src={image}
        className="card-img-top"
        style={{ height: "14rem" }}
        alt="Star Wars image"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {description1} <br /> {description2} <br /> {description3}
        </p>

        <Link to={`/info/${id}`}>
          <button type="button" className="btn btn-secondary me-2">
            Learn more!
          </button>
        </Link>

        <button
          type="button"
          className="btn btn-warning"
          onClick={handleAddToFavorites}
        >
          ♡
        </button>
      </div>
    </div>
  );
};

export default Card;
