import React, { useEffect } from "react";
import investorMain from "../../images/investorMain.png";
const InvestorsOverview = () => {
  return (
    <div className="investor-overview-main">
      <div id="upper-capabilities-div">
        {/* <div id="inner-div"> */}
        <img src={investorMain} id="capabilities-img" alt=""></img>
        <div id="capabilities-heading">Investor's Overview</div>
        {/* </div> */}
      </div>
      <div id="chartdiv"></div>
    </div>
  );
};

export default InvestorsOverview;
