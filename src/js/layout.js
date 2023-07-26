import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import InfoCharactersCard from "./views/InfoCharactersCard";
import InfoSpeciesCard from "./views/InfoSpeciesCard";
import InfoVehiclesCard from "./views/InfoVehiclesCard";
import { useCharacterContext } from "./store/DataContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";
  const { favorites } = useCharacterContext(); // Access the favorites list from the context

  return (
    <div>
      <Router basename={basename}>
        <ScrollToTop>
          <Navbar favorites={favorites} /> {/* Pass favorites to Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Not found!</h1>} />
            <Route
              path="/info/character/:id"
              element={<InfoCharactersCard />}
            />
            <Route path="/info/especies/:id" element={<InfoSpeciesCard />} />
            <Route path="/info/vehicles/:id" element={<InfoVehiclesCard />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default Layout;
