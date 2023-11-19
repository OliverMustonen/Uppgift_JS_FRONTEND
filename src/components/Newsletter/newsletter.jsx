import React from 'react'
import './newsletter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'
import wavy_lines_img from '../../assets/images/background-wavy-lines.svg'

const newsletter = () => {
  return (
    <section className="newsletter">
        <img className="background-wavy-lines" src={wavy_lines_img} alt="" />
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form action="">
                <input type="text" placeholder="username@domain.com" />
                <button className="btn-yellow">Subscribe<i> <FontAwesomeIcon icon={faArrowUpRightDots} /></i></button>
            </form>
        </div>
     </section>
  )
}

export default newsletter