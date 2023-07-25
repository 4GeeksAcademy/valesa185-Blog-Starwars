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

  const removeFromFavorites = (characterName) => {
    setFavorites(favorites.filter((name) => name !== characterName));
  };

  return (
    <CharacterContext.Provider
      value={{
        selectedCharacterName,
        setSelectedCharacterName,
        favorites,
        addToFavorites,
        removeFromFavorites, 
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

const useCharacterContext = () => useContext(CharacterContext);

export { CharacterContext, CharacterProvider, useCharacterContext };
