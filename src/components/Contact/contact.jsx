import React, { useState } from 'react'
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots, faPhoneVolume, faEnvelope, faLocationDot  } from '@fortawesome/free-solid-svg-icons'
import address_img from '../../assets/images/Contact/address.png'

const contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleForm = async (e) => {
        e.preventDefault()
        
        const user = {name, email, message}
        const json = JSON.stringify(user)
       const res = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: json
       }) 

       let data 
       if(res.status === 200) {
           data = await res.text()
           
           document.getElementById("status-message").innerHTML = `
           <div className="alert alert-success" role="alert">
               Message has been sent.
           </div>`
       } 

       switch (res.status) {
        case 200: 
            console.log('användare skickade ett meddelande')
           
            break;
        case 400:
            setErrorMessage('Something went wrong, check the form')
            break;
        case 409:
            setErrorMessage('There is already a user with the same e-mail address')
            break;
       }
  } 

  

  return (
    <section className='contact'>

        <div className='showcase_title'>
                    <div>
                        <a href="">Home</a>
                        <a href="">Contact</a>
                    </div>
                    <h1>Let's Connect</h1>
        </div>

        <div className='container'>
            
            <div className='box'>
               <div className='icon_left'>
                    <div>
                        <a href=""><button className='btn-circle'><i><FontAwesomeIcon icon={faLocationDot} /></i></button></a>
                    </div>
                    <div className='us'>
                        <h2>Visit us</h2>
                        <p>Sveavägen 31</p>
                        <p>111 34 STOCKHOLM</p>
                    </div>
               </div>

               <div className='icon_left'>
                    <div>
                    <a href=""><button className='btn-circle'><i><FontAwesomeIcon icon={faPhoneVolume} /></i></button></a>
                    </div>
                    <div className='us'>
                        <h2>Call us</h2>
                        <p>+46 (8) 121 470 50</p>
                        <p>+46 (8) 121 470 51</p>
                    </div>
               </div>

               <div className='icon_left'>
                    <div>
                    <a href=""><button className='btn-circle'><i><FontAwesomeIcon icon={faEnvelope} /></i></button></a>
                    </div>
                    <div className='us'>
                        <h2>Email us</h2>
                        <p>info@crito.com</p>
                        <p>support@crito.com</p>
                    </div>
               </div>

            </div>

            <div className='message_form  container mt-5'>
                <h1>Leave us a message <br/> for any information</h1>
                <div id="status-message"></div>
                
                <form onSubmit={handleForm} noValidate>
                    <p className="errorMessage" >{errorMessage}</p>
                    <div className="name">
                        <input id="name" className="form-control" placeholder='Name*' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>            
                    <div className="email">
                        <input id="email" className="form-control" placeholder='Email*' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="message ">
                        <textarea id="message" className="form-control" placeholder='Your Message*' type="text" value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </div>
                    <div className="d-grid button">
                        <button type="submit" className="btn-yellow">Send Message <i><FontAwesomeIcon icon={faArrowUpRightDots} /></i></button>
                    </div>
                </form>
            </div>
            
            
        </div>
        
        <img src={address_img} alt="image of address" />
    </section>
  )
}

export default contact