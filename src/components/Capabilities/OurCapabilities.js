import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import EstatePlanning from "./EstatePlanning";
import FinancialPlanning from "./FinancialPlanning";
import Insurance from "./Insurance";
import Loan from "./Loan";
import "./ourcapabilities.css";
import Taxation from "./Taxation";
import WealthManagement from "./WealthManagement";
import capabilities from "../../images/capabilities.png";
const OurCapabilities = () => {
  return (
    <div className="capabilities-main">
      <div id="upper-capabilities-div">
        {/* <div id="inner-div"> */}
        <img src={capabilities} id="capabilities-img" alt=""></img>
        <div id="capabilities-heading">Our Capabilities</div>
        {/* </div> */}
      </div>
      <div className="slider-parent">
        <div className="slider">
          <div className="slider-links">
            <Link to="/our-capabilities/">
              <div className="icon">A</div>
              <div className="txt">
                <p className="link-txt" >Financial</p>
                <p className="link-txt" > Planning</p>
              </div>
            </Link>
            <Link to="/our-capabilities/Taxation">
              <div className="icon">Y</div>
              <div className="txt"><p className="link-txt" >Taxation</p></div>
            </Link>
            <Link to="/our-capabilities/Estate-Planning">
              <div className="icon">$</div>
              <div className="txt">
                <p className="link-txt" >Financial</p>
                <p className="link-txt" >Planning</p>
              </div>
            </Link>
            <Link to="/our-capabilities/Wealth-Management">
              <div className="icon">&#38;</div>
              <p className="link-txt" >Wealth</p>
              <p className="link-txt" >Management</p>
              <div className="txt"></div>
            </Link>
            <Link to="/our-capabilities/Loan">
              <div className="icon">8</div>
              <div className="txt">
                <p className="link-txt" >Loan</p>
              </div>
            </Link>
            <Link to="/our-capabilities/Insurance">
              <div className="icon">D</div>
              <div className="txt">
                <p className="link-txt" >Insurance</p>
              </div>
            </Link>
          </div>

          <div id="sub-capabilities">
            <Routes>
              <Route path="/" exact element={<FinancialPlanning />} />
              <Route path="/Loan" exact element={<Loan />} />
              <Route path="/Insurance" exact element={<Insurance />} />
              <Route
                path="/Estate-Planning"
                exact
                element={<EstatePlanning />}
              />
              <Route path="/Taxation" exact element={<Taxation />} />
              <Route
                path="/Wealth-Management"
                exact
                element={<WealthManagement />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCapabilities;
