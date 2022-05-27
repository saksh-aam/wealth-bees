import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import Presence from "./Presence";
import Vision from "./Vision";
import Growth from "./Growth";
import "./ourfirm.css";
import Impact from "./Impact";
import { BsLayoutSidebarInset } from "react-icons/bs";
const OurFirm = () => {
  const [flag, setflag] = useState(true);
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
            <div id="ourfirm-routes-content">
                <Presence />
                <Vision />
                <Growth />
                <Impact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFirm;
