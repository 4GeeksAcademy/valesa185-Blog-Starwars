import React, { useEffect, useState } from "react";
import CardVehicles from "../component/CardVehicles";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles/")
      .then((response) => response.json())
      .then((data) => {
        const characterURLs = data.results.map((result) => result.url);

        // Nuevo fetch con todas las URLs de los vehiculos
        Promise.all(
          characterURLs.map((url) =>
            fetch(url).then((response) => response.json())
          )
        )
          .then((charactersData) => {
            // Procesar los datos
            const characterDetails = charactersData.map((data) => ({
              id: data.result.uid,
              name: data.result.properties.name,
              image: `https://starwars-visualguide.com/assets/img/vehicles/${data.result.uid}.jpg`,
              description1: `Model: ${data.result.properties.model}`,
              description2: `Manufacturer: ${data.result.properties.manufacturer}`,
              description3: `Passengers: ${data.result.properties.passengers}`,
            }));

            setCharacters(characterDetails);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="characterList">
      {characters.map((character) => (
        <CardVehicles key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
