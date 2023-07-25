import React, { createContext, useContext, useState } from "react";

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [selectedCharacterName, setSelectedCharacterName] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (characterName) => {
    if (!favorites.includes(characterName)) {
      setFavorites([...favorites, characterName]);
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        selectedCharacterName,
        setSelectedCharacterName,
        favorites,
        addToFavorites,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

const useCharacterContext = () => useContext(CharacterContext);

export { CharacterContext, CharacterProvider, useCharacterContext };
