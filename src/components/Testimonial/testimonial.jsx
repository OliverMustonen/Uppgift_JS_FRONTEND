import React from 'react'
import './testimonial.css';
import amanda_img from '../../assets/images/Testimonial/amanda.png'
import cassandra_img from '../../assets/images/Testimonial/cassandra.png'
import jack_img from '../../assets/images/Testimonial/jack.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots, faStar } from '@fortawesome/free-solid-svg-icons'

const testimonial = () => {
  return (
    <section className="testimonial">
        <div className="container">
            <div className="section-title">
                <p className="red-font">Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>
                <div className="what-our-client-says">
                    <article>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="clients">
                            <img src={cassandra_img} alt="" />
                            <div>
                                <h3>Cassandra Warren</h3>
                                <p className="red-font">Business Manger, Dorfus</p>
                            </div>  
                        </div>
                    </article>
                    <article>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="clients">
                            <img src={amanda_img} alt="" />
                            <div>
                                <h3>Amanda Tulling</h3>
                                <p className="red-font">Senior Developer, Square</p>
                            </div>  
                        </div>
                    </article>
                    <article>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="clients">
                            <img src={jack_img} alt="" />
                            <div>
                                <h3>Jack McDogglas</h3>
                                <p className="red-font">Key Account Manager, Gobona</p>
                            </div>  
                        </div>
                    </article>
                   
                </div>
                <div className="all-reviews">
                    <a className="btn-black" href="projects.html">All Reviews<i> <FontAwesomeIcon icon={faArrowUpRightDots} /></i></a>
                </div>
          </div>
    </section>
  )
}

export default testimonial