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
        <div id="sidebar" style={{ width: flag ? "0" : "250px", opacity: flag ? "0" : "1" }}>
          <div className="sidebar-header" style={{ width: flag ? "0" : "250px", opacity: flag ? "0" : "1" }}>
            Our Firm
          </div>

          <ul className="list-unstyled components" style={{ width: flag ? "0" : "250px", opacity: flag ? "0" : "1" }}>
            <li>
              <div className="side-links" style={{ width: flag ? "0" : "250px", opacity: flag ? "0" : "1" }}>
                <div className="arrow">
                  <GoTriangleRight />
                </div>
                <a href="#Presence" className="sidelink-val">
                  Presence
                </a>
              </div>
            </li>
            <li>
              <div className="side-links" style={{ width: flag ? "0" : "250px", opacity: flag ? "0" : "1" }}>
                <div className="arrow">
                  <GoTriangleRight />
                </div>
                <a href="#Vision" className="sidelink-val">
                  Vision
                </a>
              </div>
            </li>
            <li>
              <div className="side-links" style={{ width: flag ? "0" : "250px", opacity: flag ? "0" : "1" }}>
                <div className="arrow">
                  <GoTriangleRight />
                </div>
                <a href="#Growth" className="sidelink-val">
                  Growth
                </a>
              </div>
            </li>
            <li>
              <div className="side-links" style={{ width: flag ? "0" : "250px", opacity: flag ? "0" : "1" }}>
                <div className="arrow">
                  <GoTriangleRight />
                </div>
                <a href="#Impact" className="sidelink-val">
                  Impact on Society
                </a>
              </div>
            </li>
          </ul>
        </div>

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
            <div id="Presence">
                <Presence />
              </div>
            <div id="Vision">
                <Vision />
              </div>
            <div id="Growth">
                <Growth />
              </div>
            <div id="Impact">
                <Impact />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFirm;
