import React from 'react'
import './About_Company.css';
import founder_img from '../../assets/images/About_Company/founder.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots, faPlay } from '@fortawesome/free-solid-svg-icons'
 
const About_Company = () => {
  return (
    <section className="about-company">
    <div className="container">
        <div className="container-founder">
            <img src={founder_img} alt="Samanta Brown Founder off Crito" />
            <div className="founder">
                <h4>Samanta Brown, <span>Founder</span></h4>
                
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
        </div>
        
        <div className="content">
            <p className="red-font">About Company</p>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
           
            <a className="btn-black " href="services.html">Learn More <i><FontAwesomeIcon icon={faArrowUpRightDots} /></i></a>
            <a className="btn-black " href="services.html">Intro Video <i><FontAwesomeIcon icon={faPlay} /></i></a>
              
        </div>
    </div>
   </section>
  )
}

export default About_Company