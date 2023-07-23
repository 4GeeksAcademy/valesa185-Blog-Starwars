import React, { useEffect, useState } from "react";
import Card from "../component/Card";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((response) => response.json())
      .then((data) => {
        const charactersData = data.results.map((result) => ({
          id: result.uid,
          name: result.name,
          image: `https://starwars-visualguide.com/assets/img/characters/${result.uid}.jpg`,
          description: `Altura: ${result.properties}`,
        }));
        setCharacters(charactersData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="characterList">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
