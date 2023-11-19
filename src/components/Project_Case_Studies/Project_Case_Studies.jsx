import React from 'react'
import './Project_Case_Studies.css';
import article_1_img from '../../assets/images/Project_&_Cases_Studies/article-image-1.png'
import article_2_img from '../../assets/images/Project_&_Cases_Studies/article-image-2.png'
import article_3_img from '../../assets/images/Project_&_Cases_Studies/article-image-3.png'
import article_4_img from '../../assets/images/Project_&_Cases_Studies/article-image-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'

const Project_Case_Studies = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <p className="red-font">Project & Case Studies</p>
                <h2>Let's Looks Our Global Project</h2>
            </div>
                <div className="project-and-cases">
                    <article>
                        <img src={article_1_img} alt="man holding newspappber" />
                        <h3>Grow your business</h3>
                        <a href="">Read More<i className="fa-solid fa-arrow-up-right-dots"></i></a>
                    </article>
                    <article>
                        <img src={article_2_img} alt="electronic hardware" />
                        <h3>Why your client needs a reponsive website</h3>
                        <a href="">Read More<i className="fa-solid fa-arrow-up-right-dots"></i></a>
                    </article>
                    <article>
                        <img src={article_3_img} alt="work tools" />
                        <h3>Educate your eployees to get better results</h3>
                        <a href="">Read More<i className="fa-solid fa-arrow-up-right-dots"></i></a>
                    </article>
                    <article>
                        <img src={article_4_img} alt="laptop with a site of graphs" />
                        <h3>Business insights is a important piece of your business</h3>
                        <a href="">Read More<i className="fa-solid fa-arrow-up-right-dots"></i></a>
                    </article>
                </div>
                <div className="all-recent-projects">
                    <a className="btn-black" href="projects.html">All Recent Projects<i> <FontAwesomeIcon icon={faArrowUpRightDots} /></i></a>
                </div>
          </div>
    </section>
  )
}

export default Project_Case_Studies