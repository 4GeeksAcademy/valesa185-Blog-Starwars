import React, { useState, useEffect } from "react";
import getState from "./flux.js";
import { CharacterProvider, CharacterContext } from "./CharacterContext";

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

    useEffect(() => {}, []);

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
