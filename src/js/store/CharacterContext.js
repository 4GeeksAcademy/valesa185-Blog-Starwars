import React, { createContext, useContext, useState } from "react";

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [selectedCharacterName, setSelectedCharacterName] = useState(null);

  return (
    <CharacterContext.Provider
      value={{ selectedCharacterName, setSelectedCharacterName }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

const useCharacterContext = () => useContext(CharacterContext);

export { CharacterContext, CharacterProvider, useCharacterContext }; // Export the components directly, no need for default export
