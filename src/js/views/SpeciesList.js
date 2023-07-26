import React, { useEffect, useState } from "react";
import CardSpecies from "../component/CardSpecies";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/species/")
      .then((response) => response.json())
      .then((data) => {
        const characterURLs = data.results.map((result) => result.url);

        // Nuevo fetch con todas las URLs de los personajes
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
              image: `https://starwars-visualguide.com/assets/img/species/${data.result.uid}.jpg`,
              description1: `Classification: ${data.result.properties.classification}`,
              description2: `Designation: ${data.result.properties.designation}`,
              description3: `Height: ${data.result.properties.average_height}`,
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
        <CardSpecies key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
