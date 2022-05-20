import React from "react";
import insight1 from "../../images/insights.png";
import main from "../../images/main.png";
import HT1 from "../../images/HT1.png";
import HT2 from "../../images/HT2.png";
import HT3 from "../../images/HT3.png";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="home-main">
      <div id="section-1" className="sections">
        {/* <img src={main} alt="" id="mainImg" /> */}
        <div id="section1-inner">
          <div id="home-main-heading">
            <span id="first">Investing in</span>
            <p id="newline">
              <span id="second">trust and </span>
              <span id="third">commitment</span>
            </p>
          </div>
        </div>
      </div>
      <div id="section-2" className="sections">
        <div className="section2-inner">
          <h1 className="subheading-home">Insights</h1>
          <div className="section-2main">
            <div className="section2-content">
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
            </div>
            <div className="section23-image">
              <img src={insight1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="section-3" className="sections">
        <div className="section3-inner">
          <div className="section3-image" id="rupee">
            {/* <img src={rupee} alt="" /> */}₹
          </div>
          <div className="section3-content">
            <div>
              <h1 className="subheading3">WealthBees</h1>
            </div>
            <div className="section3-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              textever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It
              waspopularised in the 1960s with the release of Letraset
              sheetscontaining Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
      <div id="section-4" className="sections">
        <div className="section4-inner">
          <div className="div-top">
            <div id="box4-1" className="subdivsof4">
              <img src={HT1} alt="" />
              <div id="content4-1">
                <h1 id="subheading4-1">
                  Online ATM. - Fast &amp; Secure WealthBees Mobile App
                </h1>
                <hr className="linein4" />
                <p className="aboutapp4">
                  Online ATM on the app allows you to invest or withdraw an
                  amount within 30 minutes of service request. Making you feel
                  secure about the ease of access to your money.
                </p>
              </div>
            </div>

            <div id="box4-2" className="subdivsof4">
              <div id="content4-2">
                <div>
                  <h1 className="subheading4">Harnessing Technology</h1>
                </div>
                <div className="section4-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
            </div>
          </div>

          <div className="div-bottom">
            <div id="box4-3" className="subdivsof4">
              <img src={HT3} alt="" />
              <div id="content4-3">
                <h1 id="subheading4-3">
                  Portfolio in your pocket. WealthBees Mobile App
                </h1>
                <hr className="linein4" id="line-sec" />
                <p className="aboutapp4">
                  With an easy and interactive interface, Get an overview of
                  your whole portfolio with real-time updates. Bringing your
                  family's complete portfolio in your pocket.
                </p>
              </div>
            </div>

            <div id="box4-4" className="subdivsof4">
              <img src={HT2} alt="" id="HT2" />
              <div id="content4-4">
                <h1 id="subheading4-4">
                  Investing through Research &amp; Perfection.
                </h1>
                <hr className="linein4" id="line-third" />
                <p className="aboutapp4">
                  Investing in the suitable funds, which ensures your profit,
                  with state-of-the-art infographics-based research on
                  Investments. So that you have a perfectly balanced portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
