import React from 'react'
import './Footer.css';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';

const footer = () => {
  return (
    <div className='footer-container'>
        <h1 className='name'>Q-Mart</h1>
        <div className="footer-section">
          <div className="footer-link">
            <div className="footer-div">
              <h4>MAY WE HELP YOU?</h4>
              <a href="/Contact Us"></a>
              <p>Contact Us</p>
              <a href="/My Order"></a>
              <p>My Order</p>
              <a href="/FAQs"></a>
              <p>FAQs</p>
              <a href="/Email Unsubscribe"></a>
              <p>Email Unsubscribe</p>
              <a href="/Sitemap"></a>
              <p>itemap</p>
            </div>
            <div className="footer-div">
              <h4>THE COMPANY</h4>
              <a href="/About Q-mart"></a>
              <p>About Q-mart</p>
              <a href="/Careers"></a>
              <p>itemap</p>
              <a href="/Privacy & Cookie Policy"></a>
              <p>Privacy & Cookie Policy</p>
              <a href="/Corporate Information"></a>
              <p>Corporate Information</p>
            </div>
            <div className="footer-div">
              <h4>Coming soon on</h4>
              <div className="socialmedia">
              <a href="/">
            <AiFillInstagram
             size = {24}
             style = {{color: 'white'}}
             /> 
          </a>
          <a href="/">
            <AiFillFacebook
             size = {24}
             style = {{color: 'white'}}
             /> 
          </a>
          <a href="/">
            <AiOutlineLinkedin
             size = {24}
             style = {{color: 'white'}}
             /> 
          </a>
          <a href="/">
            <AiFillTwitterCircle
             size = {24}
             style = {{color: 'white'}}
             /> 
          </a>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="footer-below">
              <div className="footer-copyright">
                <p>
                  @ 2023-2025 Q-mart-All right reserved
                </p>
              </div>
              <div className="footer-down">
                <a href="/terms"><div >
                  <p>Terms & Condition</p></div></a>
                  <a href="/security"><div >
                  <p>Security</p></div></a>
                  <a href="/cooki"><div >
                  <p>Cooki Declaration</p></div></a>
              </div>
              </div>
        </div>
    </div>
  )
}

export default footer;
