import React from 'react'
import './Why_Choose_us.css';
import business_meeting from '../../assets/images/Why_Choose_Us/business-meeting.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faClipboardList, faPenFancy, faUserGear  } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp   } from '@fortawesome/free-regular-svg-icons'

const why_choose_us = () => {
  return (
    <section className="why-choose-us">
        <div className="container">
            <div className="content">
                <p className="red-font">Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2> 
                    <div className="content-left">
                        <div className="icon">
                            <i><FontAwesomeIcon icon={faThumbsUp} /></i>
                            <i><FontAwesomeIcon icon={faClipboardList} /></i>
                            <i><FontAwesomeIcon icon={faPenFancy} /></i>
                            <i><FontAwesomeIcon icon={faUserGear} /></i>
                        </div>
                        <div className="small-box">
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            <h3>Strategic Planning</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            <h3>Artifical Inteligence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    
            </div>
            
            <img src={business_meeting} alt="image of women talking business" />
            
        </div>
        
    </section>
  )
}

export default why_choose_us