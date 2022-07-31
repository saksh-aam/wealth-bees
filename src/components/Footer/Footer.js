import React from "react";
import "./footer.css";
import {
  GrLinkedinOption,
  GrTwitter,
  GrYoutube,
  GrFacebookOption,
} from "react-icons/gr";
import footerheading from "../../images/footerheading.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-heading">
        <img src={footerheading} alt="" />
      </div>
      <div className="footer-handles">
        <div className="link-icons">
          <a
            href="https://www.linkedin.com/company/wealth-bees/"
            target="_blank" rel="noreferrer"
          >
          <GrLinkedinOption size={25} /></a>
        </div>
        <div className="link-icons">
          <a
            href="https://youtube.com/channel/UCaSoQYki_bVLp-RXNOc433Q"
            target="_blank" rel="noreferrer"
          >
            <GrYoutube size={25} />
          </a>
        </div>
        <div className="link-icons">
          <a href="https://m.facebook.com/Wealthbees/" target="_blank" rel="noreferrer">
            {" "}
            <GrFacebookOption size={25} />
          </a>
        </div>
        <div className="link-icons">
          <a
            href="https://twitter.com/wealthbees?s=11&t=wpFQdgwp02nuYwmun1OINw"
            target="_blank" rel="noreferrer"
          >
            {" "}
            <GrTwitter size={25} />
          </a>
        </div>
      </div>
      <div className="footer-handles-mobile">
        <div className="link-icons">
          <a
            href="https://www.linkedin.com/company/wealth-bees/"
            target="_blank" rel="noreferrer"
          >
            <GrLinkedinOption size={20} /></a>
        </div>
        <div className="link-icons">
          <a
            href="https://youtube.com/channel/UCaSoQYki_bVLp-RXNOc433Q"
            target="_blank" rel="noreferrer"
          >
            <GrYoutube size={20} />
          </a>
        </div>
        <div className="link-icons">
          <a href="https://m.facebook.com/Wealthbees/" target="_blank" rel="noreferrer">
            {" "}
            <GrFacebookOption size={20} />
          </a>
        </div>
        <div className="link-icons">
          <a
            href="https://twitter.com/wealthbees?s=11&t=wpFQdgwp02nuYwmun1OINw"
            target="_blank" rel="noreferrer"
          >
            {" "}
            <GrTwitter size={20} />
          </a>
        </div>
      </div>
      <div className="line-container">
        <hr className="footer-line line-top" />
      </div>
      <div className="footer-links">
        <div className="link-txt"><Link to="/our-capabilities">Capabilities</Link></div>
        <div className="link-txt"><Link to="our-firm">Our Firm</Link> </div>
        <div className="link-txt"><Link to="people">People</Link></div>
        <div className="link-txt"><Link to="investors">Investors</Link></div>
      </div>
      <div className="line-container">
        <hr className="footer-line line-bottom" />
      </div>
      <p className="copyright">
        © 2022 Cadence Finserve Pvt Ltd. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
