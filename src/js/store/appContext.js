import React, { useState, useEffect } from "react";
import getState from "./flux.js";
import {
  CharacterContext, // Correct the import to include CharacterContext
  CharacterProvider, // Correct the import to include CharacterProvider
} from "./CharacterContext";

// ... (existing code)

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      // ... (existing code)
    }, []);

    return (
      <CharacterProvider>
        <CharacterContext.Provider value={state}>
          <PassedComponent {...props} />
        </CharacterContext.Provider>
      </CharacterProvider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
