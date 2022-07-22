import React from 'react'
import "./sidebar.css"
import { GoTriangleRight } from "react-icons/go";
const Sidebar = ({flag, heading, list}) => {
  return (
    <div>
      <nav id="sidebar" style={{ display: flag ? "block" : "none" }}>
        <div className="sidebar-header">
          <h1 id="sidebar-heading">{heading}</h1>
        </div>

        <ul className="list-unstyled components">
          {list.map((index) => {
            return (
              <li className='side-li'>
                <div className="side-links">
                  <div className="arrow">
                    <GoTriangleRight />
                  </div>
                  <a href={index} className="sidelink-val">
                    {index.substring(1).split("-").join(" ")}
                  </a>
                </div>
              </li>
            );
          }
        )}
          {/* <li>
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
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;