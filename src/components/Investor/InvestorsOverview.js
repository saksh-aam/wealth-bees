import React from "react";
import investorMain from "../../images/investorMain.png";
import "./Investors.css";
import { AiOutlineArrowRight } from "react-icons/ai";
const InvestorsOverview = () => {
  return (
    <div className="investor-overview-main">
      <div id="upper-capabilities-div">
        {/* <div id="inner-div"> */}
        <img src={investorMain} id="capabilities-img" alt=""></img>
        <div id="capabilities-heading">Investor's Overview</div>
        {/* </div> */}
      </div>
      <div className="investors-main-inner">
        <div className="contact-details">
          <p className="contact-details-text">For any other queries write us to : contact@wealthbees.in</p>
          <p className="contact-details-text">Or Call Us at 123456789</p>
        </div>
        <div className="login-cards-container">
          <div className="login-cards">
            <p className="user-type">New User</p>
            <hr className="login-details-line" />
            <p className="user-type-details">Need assistance with your Finances?
              We'll get you the help you need.</p>
            <div className="arrow-container"><span className="user-action">Get Started  <AiOutlineArrowRight /></span></div>
          </div>
          <div className="login-cards">
            <p className="user-type">Returning User</p>
            <hr className="login-details-line" />
            <p className="user-type-details">Login in to your Dashboard to help you with Finance</p>
            <div className="arrow-container"><span className="user-action">Login  <AiOutlineArrowRight /></span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorsOverview;
