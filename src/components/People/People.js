import React from "react";
import "./people.css";
import HT1 from "../../images/HT1.png";
const People = () => {
  return (
    <div className="people-main">
      <div id="upper-people-div">
        {/* <div id="inner-div"> */}
        <div id="people-heading">
          <p className="people-heading-p">Your service is</p>
          <p className="people-heading-p">Our responsibility</p>
          {/* </div> */}
        </div>
      </div>
      <div className="people-main-content">
        <div className="people-details">
          <div className="person-image">
            <img src={HT1} alt="" />
          </div>
          <div className="person-details">
            <h1 className="person-name">Not ANy</h1>
            <p className="person-data">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
