import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import InfoCard from "./views/InfoCard";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <Router basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="*" element={<h1>Not found!</h1>} />
            <Route path="/info/:id" element={<InfoCard />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default injectContext(Layout);
