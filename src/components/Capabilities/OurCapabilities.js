import React, { useState } from "react";
import EstatePlanning from "./EstatePlanning";
import FinancialPlanning from "./FinancialPlanning";
import Insurance from "./Insurance";
import Loan from "./Loan";
import "./ourcapabilities.css";
import Taxation from "./Taxation";
import WealthManagement from "./WealthManagement";
import capabilities from "../../images/capabilities.png";
const OurCapabilities = () => {
  const [item, setItem] = useState("fp");
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
            <div className="clickable" onClick={()=>setItem("fp")} style={{color:item==="fp"?"#f7ac1d":"#6c6c6c"}}>
              <div className="icon">A</div>
              <div className="txt">
                <p className="link-txt" >Financial</p>
                <p className="link-txt" > Planning</p>
              </div>
            </div>
            <div className="clickable" onClick={()=>setItem("tx")} style={{color:item==="tx"?"#f7ac1d":"#6c6c6c"}}>
              <div className="icon">Y</div>
              <div className="txt"><p className="link-txt" >Taxation</p></div>
            </div>
            <div className="clickable" onClick={()=>setItem("ep")} style={{color:item==="ep"?"#f7ac1d":"#6c6c6c"}}>
              <div className="icon">$</div>
              <div className="txt">
                <p className="link-txt" >Estate</p>
                <p className="link-txt" >Planning</p>
              </div>
            </div>
            <div className="clickable" onClick={()=>setItem("wm")} style={{color:item==="wm"?"#f7ac1d":"#6c6c6c"}}>
              <div className="icon">&#38;</div>
              <p className="link-txt" >Wealth</p>
              <p className="link-txt" >Management</p>
              <div className="txt"></div>
            </div>
            <div className="clickable" onClick={()=>setItem("lo")} style={{color:item==="lo"?"#f7ac1d":"#6c6c6c"}}>
              <div className="icon">8</div>
              <div className="txt">
                <p className="link-txt" >Loan</p>
              </div>
            </div>
            <div className="clickable" onClick={()=>setItem("in")} style={{color:item==="in"?"#f7ac1d":"#6c6c6c"}}>
              <div className="icon">D</div>
              <div className="txt">
                <p className="link-txt" >Insurance</p>
              </div>
            </div>
          </div>

          <div id="sub-capabilities">
            {item==="fp"?<FinancialPlanning/>:<></>}
            {item==="ep"?<EstatePlanning/>:<></>}
            {item==="wm"?<WealthManagement/>:<></>}
            {item==="in"?<Insurance/>:<></>}
            {item==="tx"?<Taxation/>:<></>}
            {item==="lo"?<Loan/>:<></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCapabilities;