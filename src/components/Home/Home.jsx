import React from 'react'
import showcase_img from '../../assets/images/ShowcaseSection/showcase-image.svg';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'
import Features from '../Features/Features';
import About_Company from '../About_Company/About_Company';
import Our_Services from '../Our_Services/Our_Services';
import Why_Choose_Us from '../Why_Choose_Us/Why_Choose_us';
import Project_Case_Studies from '../Project_Case_Studies/Project_Case_Studies';
import Meet_Our_Team from '../Meet_Our_Team/Meet_Our_Team';
import Article_News from '../Article_News/article_news';
import Newsletter from '../Newsletter/newsletter';

const ShowcaseSection = () => {
  return (
    <div>
        <section className="showcase">
      
      <div className="container">
          <div className="content">
              <h1>We Provide The Best Business Solutions</h1>
              <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
              <a className="btn-yellow " href="consulting.html">Get Consulting <i><FontAwesomeIcon icon={faArrowUpRightDots} /></i></a>
              <a className="btn-transparent " href="services.html">Learn More <i><FontAwesomeIcon icon={faArrowUpRightDots} /></i></a>
             
          </div>
          
          <img src={showcase_img} alt="image of a man in a suit with a tablet" />
          
     </div>
     
    </section>
    <Features></Features>
    <About_Company></About_Company>
    <Our_Services></Our_Services>
    <Why_Choose_Us></Why_Choose_Us>
    <Project_Case_Studies></Project_Case_Studies>
    <Meet_Our_Team></Meet_Our_Team>
    <Article_News></Article_News>
    <Newsletter></Newsletter>
    </div>
    
    
   
  )
}

export default ShowcaseSection