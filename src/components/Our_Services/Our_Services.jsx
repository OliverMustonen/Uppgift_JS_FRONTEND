import React from 'react'
import './Our_Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'

const Our_Services = () => {
  return (
    <section className="our-services">
        <div className="container">
            <div className="content">
                <p className="red-font">Our Services</p>
                <h2>We Provide The Best <br/> Service For Consulting</h2>
                <div className="line-container">
                    <div className="box">
                        <hr/>
                        <h3>Business Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <a href=""><button className="btn-circle"><i><FontAwesomeIcon icon={faArrowRight} /></i></button></a>
                    </div>
                    <div className="box">
                        <hr/>
                        <h3>Startup Business</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <a href=""><button className="btn-circle"><i><FontAwesomeIcon icon={faArrowRight} /></i></button></a>
                    </div>
                    <div className="box">
                        <hr/>
                        <h3>Financial Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <a href=""><button className="btn-circle"><i><FontAwesomeIcon icon={faArrowRight} /></i></button></a>
                    </div>
                    <div className="box">
                        <hr/>
                        <h3>Risk Management</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <a href=""><button className="btn-circle"><i><FontAwesomeIcon icon={faArrowRight} /></i></button></a>
                    </div>
                </div>
             </div>
             <div className="browse-services">
                <a className="btn-transparent " href="browse-services.html">Browse Services<i><FontAwesomeIcon icon={faArrowUpRightDots} /></i></a>
             </div>
         </div>
    </section>
  )
}

export default Our_Services