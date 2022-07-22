import React, { useState } from "react";
import EstatePlanning from "./EstatePlanning";
import FinancialPlanning from "./FinancialPlanning";
import Insurance from "./Insurance";
import Loan from "./Loan";
import "./ourcapabilities.css";
import Taxation from "./Taxation";
import WealthManagement from "./WealthManagement";
import capabilities from "../../images/capabilities.png";
import { BsLayoutSidebarInset } from "react-icons/bs";
import Sidebar from "../Sidebar/Sidebar";
const OurCapabilities = () => {
  const [flag, setflag] = useState(false);
  const list = [
    "#Financial-Planning",
    "#Taxation",
    "#Wealth-Management",
    "#Loan", "#Insurance", "#Estate-Planning",
  ];
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <div className="capabilities-main">
      <div className="capabilites-main-inner">
        <div className="div-sidebar">
          <Sidebar flag={flag} heading="Capabilities" list={list} />
        </div>
        <div className="capabilities-content">
          <div id="upper-capabilities-div">
            <div id="inner-div">
              <nav className="navbar navbar-expand-lg navbar-light bg-light toggle-btn">
                <div className="container-fluid">
                  <button
                    type="button"
                    id="sidebarCollapse"
                    className="btn btn-info bg-light "
                    onClick={() => {
                      setflag(!flag);
                    }}
                  >
                    <BsLayoutSidebarInset size={25} />
                    {/* <span>Toggle Sidebar</span> */}
                  </button>
                </div>
              </nav>
            </div>
            <img src={capabilities} id="capabilities-img" alt=""></img>
            <div id="capabilities-heading">Our Capabilities</div>
          </div>
          <div id="capabilities-routes">
            <div id="bg-image-1">
              <FinancialPlanning />
            </div>
            <div id="bg-image-2">
              <Taxation />
            </div>

            <WealthManagement />
            <Loan />
            <Insurance />
            <EstatePlanning />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCapabilities;
