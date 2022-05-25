import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar.js";
import OurFirm from "./components/Ourfirm/OurFirm";
import Growth from "./components/Ourfirm/Growth";
import OurCapabilities from "./components/Capabilities/OurCapabilities";
import Taxation from "./components/Capabilities/Taxation";
import WealthManagement from "./components/Capabilities/WealthManagement";
import Insurance from "./components/Capabilities/Insurance";
import EstatePlanning from "./components/Capabilities/EstatePlanning";
import Loan from "./components/Capabilities/Loan";
import FinancialPlanning from "./components/Capabilities/FinancialPlanning";
import InvestorsOverview from "./components/Investor/InvestorsOverview";
import Homepage from "./components/Homepage/Homepage";
import People from "./components/People/People";
import Impact from "./components/Ourfirm/Impact";
import Vision from "./components/Ourfirm/Vision";
import Presence from "./components/Ourfirm/Presence";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
                <div className="w-fit sm:w-full">
                  <Homepage />
                </div>
            }
          />

          <Route
            path="/our-firm/*"
            element={
                <div className="w-fit sm:w-full">
                  <OurFirm />
                </div>
            }
            children={[Vision, Growth, Presence, Impact]}
          />

          <Route
            path="/our-capabilities/*"
            element={
                <div className="w-fit sm:w-full">
                  <OurCapabilities />
                </div>
            }
            children={[
              Taxation,
              WealthManagement,
              Insurance,
              EstatePlanning,
              Loan,
              FinancialPlanning,
            ]}
          />
          <Route
            path="/investor-overview"
            exact
            element={
              <div className="w-fit sm:w-full">
                <InvestorsOverview />
              </div>
            }
          />
          <Route
            path="/people"
            exact
            element={
              <div className="w-fit sm:w-full">
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
