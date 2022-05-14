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
              </div>
            }
          />

          <Route
            path="/ourfirm/*"
            element={
              <div style={{ display: 'flex', flexDirection:"column" }}>
                <NavBar/>
                <div className="pt-0 py-9 px-4 w-fit sm:w-full"></div><OurFirm /><div/>
                </div>
            }
            children={[ Ideals, Growth]}
          />

          <Route
            path="/our-capabilities/*"
            element={
              <div style={{ display: 'flex', flexDirection:"column" }}>
                <NavBar/>
                <div className=" px-4 w-fit sm:w-full"></div><OurCapabilities /><div/>
                </div>
            }
            children={[ Taxation, WealthManagement, Insurance, EstatePlanning, Loan, FinancialPlanning]}
          />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
