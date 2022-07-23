import React from 'react'
import "./footer.css"
import { GrLinkedinOption, GrTwitter, GrYoutube, GrFacebookOption } from "react-icons/gr";
import footerheading from "../../images/footerheading.svg"
const Footer = () => {
  return (
      <div className='footer-main'>
          <div className='footer-heading'><img src={footerheading} alt=""/></div>
          <div className='footer-handles'>
              <div className='link-icons'><GrLinkedinOption size={25}/></div>
              <div className='link-icons'><GrYoutube size={25}/></div>
              <div className='link-icons'><GrFacebookOption size={25}/></div>
              <div className='link-icons'><GrTwitter size={25}/></div>
          </div>
          <div className='line-container'><hr className='footer-line line-top' /></div>
          <div className='footer-links'>
              <div className='link-txt'>Capabilities</div>
              <div className='link-txt'>Our Firm</div>
              <div className='link-txt'>People</div>
              <div className='link-txt'>Contact</div>
          </div>
          <div className='line-container'><hr className='footer-line line-bottom' /></div>
          <p className='copyright'>© 2022 Cadence Finserve Pvt Ltd. All rights reserved.</p>
    </div>
  )
}

export default Footer