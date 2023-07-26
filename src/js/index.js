import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./layout.js";
import { CharacterProvider } from "./store/DataContext.js";

const root = createRoot(document.querySelector("#app"));

// Render react application within the CharacterProvider
root.render(
  <React.StrictMode>
    <CharacterProvider>
      <Layout />
    </CharacterProvider>
  </React.StrictMode>
);
