import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar.js";
import OurFirm from "./components/Ourfirm/OurFirm";
import Growth from "./components/Ourfirm/Growth";
import Ideals from "./components/Ourfirm/Ideals";
import OurCapabilities from "./components/Capabilities/OurCapabilities";
import Taxation from "./components/Capabilities/Taxation";
import WealthManagement from "./components/Capabilities/WealthManagement";
import Insurance from "./components/Capabilities/Insurance";
import EstatePlanning from "./components/Capabilities/EstatePlanning";
import Loan from "./components/Capabilities/Loan";
import FinancialPlanning from "./components/Capabilities/FinancialPlanning";
import InvestorsOverview from "./components/Investor/InvestorsOverview";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="">
                <NavBar />
                <Homepage />
              </div>
            }
          />

          <Route
            path="/ourfirm/*"
            element={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <NavBar />
                </div>
                <div className="w-fit sm:w-full">
                  <OurFirm />
                </div>
              </div>
            }
            children={[Ideals, Growth]}
          />

          <Route
            path="/our-capabilities/*"
            element={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <NavBar />
                </div>
                <div className="w-fit sm:w-full" style={{ flex: "1" }}>
                  <OurCapabilities />
                </div>
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
            element={<InvestorsOverview />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
