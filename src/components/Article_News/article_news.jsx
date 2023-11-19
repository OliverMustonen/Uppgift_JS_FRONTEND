import React from 'react'
import './article_news.css';
import mar25_img from '../../assets/images/Article_&_News/25mar.png'
import mar17_img from '../../assets/images/Article_&_News/17mar.png'
import mar13_img from '../../assets/images/Article_&_News/13mar.png'
import dot_img from '../../assets/images/Article_&_News/dot-second.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'

const article_news = () => {
  return (
    <section className="article-news">
        <div className="container">
            <div className="content">
                <p className="red-font">Article & News</p>
        
                <div className="every-article-news">
                        <div id="h2" className="test">
                            <h2>Get Every Single Articles & News</h2>
                        </div>
                        <div id="a" className="test">
                            <a className="btn-transparent" href="projects.html">Browse Aricles<i> <FontAwesomeIcon icon={faArrowUpRightDots} /></i></a>
                        </div>
                </div>
               
               <div className="line-container">
                    <div className="box">
                       
                        <img src={mar25_img} alt="" />
                        <p>Business</p>
                        <h3>How To Use Digitalization In The classNameroom</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                      </div>
                    <div className="box">
                       
                        <img src={mar17_img} alt="" />
                        <p>Business</p>
                        <h3>How To Implement Chat GPT In Your Projects</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                    <div className="box">
                       
                        <img src={mar13_img} alt="" />
                        <p>Business</p>
                        <h3>The Guide To Support Modern CSS Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
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

export default article_news