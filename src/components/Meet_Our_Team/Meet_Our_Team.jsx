import React from 'react'
import './Meet_Our_Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'
import kristina_palmer_img from '../../assets/images/Meet_Our_Team/kristina-palmer.png'
import mark_aubri_img from '../../assets/images/Meet_Our_Team/mark-aubri.png'
import kimberly_hansen_img from '../../assets/images/Meet_Our_Team/kimberly-hansen.png'
import justin_willoman_img from '../../assets/images/Meet_Our_Team/justin-willoman.png'
import dot_img from '../../assets/images/Meet_Our_Team/dot.png'

const Meet_Our_Team = () => {
  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="content">
                <p className="red-font">Meet Our Team</p>
                
                
                <div className="recent-projects">
                        <div id="h2" className="test">
                            <h2>Experience Team Members</h2>
                        </div>
                        <div id="a" className="test">
                            <a className="btn-yellow-2" href="projects.html">All Recent Projects<i> <FontAwesomeIcon icon={faArrowUpRightDots} /></i></a>
                        </div>
                </div>
               
               <div className="line-container">
                    <div className="box">
                       
                        <img src={kristina_palmer_img} alt="" />
                        <h3>Kristine Palmer</h3>
                        <p>Chef Operation Officer</p>
                      </div>
                    <div className="box">
                       
                        <img src={mark_aubri_img} alt="" />
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="box">
                       
                        <img src={kimberly_hansen_img} alt="" />
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>
                   </div>
                    <div className="box">
                       
                        <img src={justin_willoman_img} alt="" />
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>
                   </div>
                </div>
             </div>
             <div className="dot">
                <img src={dot_img} alt="" />
            </div>
         </div>
    </section>
  )
}

export default Meet_Our_Team