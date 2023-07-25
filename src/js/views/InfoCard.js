import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InfoCard = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        const characterData = {
          id: data.result.uid,
          name: data.result.properties.name,
          image: `https://starwars-visualguide.com/assets/img/characters/${data.result.uid}.jpg`,
          description1: `Height: ${data.result.properties.height} cm`,
          description2: `Mass: ${data.result.properties.mass} kg`,
          description3: `Eye color: ${data.result.properties.eye_color}`,
          description4: `Hair color: ${data.result.properties.hair_color}`,
          description5: `Gender: ${data.result.properties.gender}`,
        };
        setCharacter(characterData);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!character) {
    return <h1>Loading...</h1>;
  }

  const {
    name,
    image,
    description1,
    description2,
    description3,
    description4,
    description5,
  } = character;

  return (
    <div className="card ms-4 mb-3" style={{ width: "50%", height: "50%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h4 className="card-title">Information about:</h4>
            <p className="card-text">
              {description1} <br /> {description2} <br /> {description3} <br />
              {description4} <br />
              {description5}
            </p>
            <p className="card-text">
              <small className="text-muted">
                A character within the Star Wars universe.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
