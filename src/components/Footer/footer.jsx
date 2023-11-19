import React from 'react'
import './footer.css';
import crito_logo from '../../assets/images/Footer/logotype-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const footer = () => {
  return (
    <footer>
        <div className="bg-image">
        <div className="container ">
            
           <div className="menu">
                
                <div className="main-menu">
                    <div className="crito-footer-p">
                        <img src={crito_logo} alt="crito logotype" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>
                     <div className="content">
                        <h4>Company</h4>
                        <a className="active" href="index.html">About</a>
                        <a href="services.html">Features</a>
                        <a href="news.html">Works</a>
                        <a href="contact.html">Career</a>
                    </div>
                    <div className="content">
                        <h4>Help</h4>
                        <a className="active" href="index.html">Customer Support</a>
                        <a href="services.html">Delivery Details</a>
                        <a href="news.html">Terms & Conditions</a>
                        <a href="contact.html">Privacy Policy</a>
                    </div>
                    <div className="content">
                        <h4>Resources</h4>
                        <a className="active" href="index.html">Free eBooks</a>
                        <a href="services.html">Development Tutorial</a>
                        <a href="news.html">How to - Blog</a>
                        <a href="contact.html">Youtube Playlist</a>
                    </div>
                    <div className="content">
                        <h4>Link</h4>
                        <a className="active" href="index.html">Free eBooks</a>
                        <a href="services.html">Development Tutorial</a>
                        <a href="news.html">How to - Blog</a>
                        <a href="contact.html">Youtube Playlist</a>
                    </div>
                    
                </div>
                
                
            </div>
            
        </div>
    </div>
        
        <div className="bottom-menu">
            <div className="container">
                <div className="contact-information">
                    <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                </div>
    
                <div className="social_media">
                    <a href="http://facebook.com" target="_blank"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                    <a href="http://twitter.com" target="_blank"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                    <a href="http://instagram.com" target="_blank"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                    <a href="https://linkedin.com" target="_blank"><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
    
                </div>
            </div>
           
        </div>
    
    </footer>
  )
}

export default footer