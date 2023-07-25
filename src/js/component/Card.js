import React from "react";
import { Link } from "react-router-dom";

const Card = ({ character }) => {
  const { id, name, image, description1, description2, description3 } =
    character;

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

        {/* Uso de los parametros de la URL para pasar el ID de cada personaje */}
        <Link to={`/info/${id}`}>
          <button type="button" className="btn btn-secondary me-2">
            Learn more!
          </button>
        </Link>

        <button type="button" className="btn btn-warning">
          ♡
        </button>
      </div>
    </div>
  );
};

export default Card;
