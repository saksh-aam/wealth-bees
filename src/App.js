import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar.js";
import OurFirm from "./components/Ourfirm/OurFirm";
import OurCapabilities from "./components/Capabilities/OurCapabilities";

import InvestorsOverview from "./components/Investor/InvestorsOverview";
import Homepage from "./components/Homepage/Homepage";
import People from "./components/People/People";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="pt-12  w-fit sm:w-full">
                <Homepage />
              </div>
            }
          />

          <Route
            path="/our-firm/"
            element={
              <div className="pt-12 w-fit sm:w-full">
                <OurFirm />
              </div>
            }
          />

          <Route
            path="/our-capabilities/"
            element={
              <div className="w-fit sm:w-full">
                <OurCapabilities />
              </div>
            }
          />
          <Route
            path="/investor-overview"
            exact
            element={
              <div className="pt-12 w-fit sm:w-full">
                <InvestorsOverview />
              </div>
            }
          />
          <Route
            path="/people"
            exact
            element={
              <div className="pt-12 w-fit sm:w-full">
                <People />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
