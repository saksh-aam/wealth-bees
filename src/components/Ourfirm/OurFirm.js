import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import Presence from "./Presence";
import Vision from "./Vision";
import Growth from "./Growth";
import "./ourfirm.css";
import Impact from "./Impact";
import Sidebar from "../Sidebar/Sidebar";
import { BsLayoutSidebarInset } from "react-icons/bs";
const OurFirm = () => {
  const [flag, setflag] = useState(true);
  const list = [
    "Presence",
    "Vision",
    "Growth",
    "Impact",
  ];
  return (
    <div className="ourfirm-main">
      <div className="wrapper">
        <nav id="sidebar" style={{ display: flag ? "block" : "none" }}>
          <div className="sidebar-header">
            <h1 id="sidebar-heading">Our Firm</h1>
          </div>

          <ul className="list-unstyled components">
            <li>
              <div className="side-links">
                <div className="arrow">
                  <GoTriangleRight />
                </div>
                <Link to="/our-firm/" className="sidelink-val">
                  Presence
                </Link>
              </div>
            </li>
            <li>
              <div className="side-links">
                <div className="arrow">
                  <GoTriangleRight />
                </div>
                <Link to="/our-firm/Vision" className="sidelink-val">
                  Vision
                </Link>
              </div>
            </li>
            <li>
              <div className="side-links">
                <div className="arrow">
                  <GoTriangleRight />
                </div>
                <Link to="/our-firm/Growth" className="sidelink-val">
                  Growth
                </Link>
              </div>
            </li>
            <li>
              <div className="side-links">
                <div className="arrow">
                  <GoTriangleRight />
                </div>
                <Link to="/our-firm/Impact" className="sidelink-val">
                  Impact on Society
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        <div id="content">
          <div id="upper-ourfirm-div">
            <div id="inner-div">
              {/* <div className="div-sidebar">
                <Sidebar flag={flag} heading="Capabilities" list={list} />
              </div> */}
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
            <div id="ourfirm-heading">
              <p className="ourfirm-heading-p">It's not about BUSINESS.</p>
              <p className="ourfirm-heading-p">It's about TRUST.</p>
              {/* </div> */}
            </div>
          </div>
          <div id="ourfirm-routes">
            {/* <div id="ourfirm-routes-content"> */}
              <div id="bg-image-1">
                <Presence />
              </div>
              <div id="bg-image-2">
                <Vision />
              </div>
              <div id="bg-image-3">
                <Growth />
              </div>
                <Impact />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFirm;
