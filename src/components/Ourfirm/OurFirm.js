import React, { useState } from 'react'
import { Link, Route, Routes } from
    'react-router-dom';
import { GoTriangleRight } from 'react-icons/go';
import Presence from "./Presence";
import Ideals from "./Ideals";
import Growth from "./Growth";
import "./ourfirm.css";
const OurFirm = () => {
    const [ flag, setflag ] = useState(true);
  return (
    <div className="ourfirm-main"><div className="wrapper">
        <nav id="sidebar" style={{display: flag ? 'block' : 'none'}}>
            <div className="sidebar-header" >
                <h1 id='sidebar-heading'>Our Firm</h1>
            </div>

            <ul className="list-unstyled components">
                <li >
                    <div className='side-links'><div className='arrow'><GoTriangleRight/></div><Link to="/ourfirm/" >Presence</Link></div>
                </li>
                <li>
                    <div className='side-links'><div className='arrow'><GoTriangleRight/></div><Link to="/ourfirm/Ideals">Ideals</Link></div>
                </li>
                <li>
                    <div className='side-links'><div className='arrow'><GoTriangleRight/></div><Link to="/ourfirm/Growth">Growth</Link></div>
                </li>
                <li>
                    <div className='side-links'><div className='arrow'><GoTriangleRight/></div><Link to="/ourfirm/Past">Past</Link></div>
                </li>
                <li>
                    <div className='side-links'><div className='arrow'><GoTriangleRight/></div><Link to="/ourfirm/Impact">Impact on Society</Link></div>
                </li>
                <li>
                    <div className='side-links'><div className='arrow'><GoTriangleRight/></div><Link to="/ourfirm/Past">Contact</Link></div>
                </li>
            </ul>

        </nav>

        <div id="content">

            <nav className="navbar navbar-expand-lg navbar-light bg-light toggle-btn">
                <div className="container-fluid">

                      <button type="button" id="sidebarCollapse" className="btn btn-info bg-light w-full" onClick={() =>{ setflag(!flag) }}>
                        <span>Toggle Sidebar</span>
                    </button>

                </div>
            </nav>

              <div>
                  <Routes>
                    <Route path="/" exact element={<Presence/>}/>
                  <Route path="/Growth" exact element={<Growth/>}/>
                  <Route path="/Ideals" exact element={<Ideals/>}/>
                  </Routes>
            </div>

            </div>
    </div></div>
  )
}

export default OurFirm