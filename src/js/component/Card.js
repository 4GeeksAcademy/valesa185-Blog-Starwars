import React from "react";

const Card = ({ character }) => {
  const { id, name, image, description } = character;

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
        <p className="card-text">{description}</p>

        <button type="button" className="btn btn-secondary me-2">
          Learn more!
        </button>
        <button type="button" className="btn btn-warning">
          Favorite
        </button>
      </div>
    </div>
  );
};

export default Card;
