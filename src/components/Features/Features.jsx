import React from 'react'
import './Features.css';
import paperz_img from '../../assets/images/Features/paperz.svg'
import dorfus_img from '../../assets/images/Features/dorfus.svg'
import martino_img from '../../assets/images/Features/martino.svg'
import square_img from '../../assets/images/Features/square.svg'
import gobona_img from '../../assets/images/Features/gobona.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots, faChartLine, faUsersGear, faBusinessTime } from '@fortawesome/free-solid-svg-icons'
import { faHandshake  } from '@fortawesome/free-regular-svg-icons'


const Features = () => {
  return (
    <section className="features">

        <div className="companies">
            
            <img id="child-1" className="child" src={paperz_img} alt="" />
            <img id="child-2" className="child" src={dorfus_img} alt="" />
            <img id="child-3" className="child" src={martino_img} alt="" />
            <img id="child-4" className="child" src={square_img} alt="" />
            <img id="child-5" className="child" src={gobona_img} alt="" />
            
        </div>

        <div className="container">
            
            
            <div className="content">
                <p className="red-font">Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <a className="btn-long" href="consulting.html">Learn More <i><FontAwesomeIcon icon={faArrowUpRightDots} /></i></a>
            </div>
            <div className="content-box">
                <div className="width-box">
                    <i><FontAwesomeIcon icon={faHandshake} /></i>
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <i><FontAwesomeIcon icon={faChartLine} /></i>
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            <div className="width-box">
                    <i><FontAwesomeIcon icon={faBusinessTime} /></i>
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <i><FontAwesomeIcon icon={faUsersGear} /></i>
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
                
            </div>
        
        </div>

    </section>
  )
}

export default Features