import React from 'react'

import logotype_img from '../../assets/images/Header/logotype.svg'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots, faPhoneVolume, faEnvelope, faLocationDot, faBarsStaggered  } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    
    <header>
        
        <div className="container ">
            <img src={logotype_img} alt="crito logotype" />
            <button className="menu-bars"><i><FontAwesomeIcon icon={faBarsStaggered} /></i></button>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="content-box">
                            <i><FontAwesomeIcon icon={faPhoneVolume} /></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="content-box">
                            <i><FontAwesomeIcon icon={faEnvelope} /></i>
                            info@crito.com
                        </div>
                        <div className="content-box last">
                            <i><FontAwesomeIcon icon={faLocationDot} /></i>
                            Sveavägem 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    
                    <div className="social_media">
                        <a href="http://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="http://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                       
                    </div>
                    
                </div>
                <div className="main-menu">
                    <nav>
                        <a className="active" href="/">Home</a>
                        <a href="services">Service</a>
                        <a href="news">News</a>
                        <a href="contact">Contact</a>
                    </nav>
                    <a className="btn-yellow btn-login" href="login.html">Login <i><FontAwesomeIcon icon={faArrowUpRightDots} /></i></a>
                </div>
                
            </div>
            
        </div>

       
        
    </header>
  )
}

export default Header