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
        };
        setCharacter(characterData);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!character) {
    return <h1>Loading...</h1>;
  }

  const { name, image, description1, description2, description3 } = character;

  return (
    <div className="info-card">
      <img src={image} alt={name} style={{ height: "14rem" }} />
      <div>
        <h2>{name}</h2>
        <p>{description1}</p>
        <p>{description2}</p>
        <p>{description3}</p>
      </div>
    </div>
  );
};

export default InfoCard;
