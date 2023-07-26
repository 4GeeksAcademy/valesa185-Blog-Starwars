import React, { useEffect, useState } from "react";
import CardCharacters from "../component/CardCharacters";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
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
              image: `https://starwars-visualguide.com/assets/img/characters/${data.result.uid}.jpg`,
              description1: `Height: ${data.result.properties.height} cm`,
              description2: `Mass: ${data.result.properties.mass} kg`,
              description3: `Eye color: ${data.result.properties.eye_color} `,
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
        <CardCharacters key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
