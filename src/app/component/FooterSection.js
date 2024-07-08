"use client";
import React from 'react'    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faInstagram, faTiktok, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';



const FooterSection = () => {
  return (
    <footer id="footer-section" className="container-lg py-lg-5 pt-sm-0 pb-sm-3 text-white">
      <div className="row justify-content-between align-items-center g-3">
        <div className="col-auto">
          <a  href="#home" className='text-white fs-2 fw-bolder text-decoration-none'>appran.</a>
        </div>
        <div className="col-12 col-md-auto order-3 order-md-2"> 
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link fs-6 text-white text-opacity-50 fw-semibold" target="_blank" href="https://www.appran.com/#buy-section" rel="noreferrer">
                  APP INSTALLS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6  text-white text-opacity-50 fw-semibold" target="_blank" href="https://www.appran.com/#services-section" rel="noreferrer">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6 text-white text-opacity-50 fw-semibold" href="#testimonials-section">
                  TESTIMONIALS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6 text-white text-opacity-50 fw-semibold" href="#faq-section">
                  FAQS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6 text-white text-opacity-50 fw-semibold" target="_blank" href="https://blog.appran.com" rel="noreferrer">
                  BLOG
                </a>
              </li>
            </ul> 
        </div>
        <div className="col-auto order-2 order-md-3 d-flex gap-2">
        <a target="_blank" href="https://www.facebook.com/Apprantalks" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className='textGradient fs-4 mx-2' />
          </a>
          <a target="_blank" href="https://twitter.com/AppRanTalks" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} className='textGradient fs-4 mx-2' /> 
          </a>
          <a target="_blank" href="https://www.instagram.com/apprantalks/" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} className='textGradient fs-4 mx-2' />
          </a>
          <a target="_blank" href="https://www.tiktok.com/@user4593057596996" rel="noreferrer">
          <FontAwesomeIcon icon={faTiktok} className='textGradient fs-4 mx-2' />
          </a>
          <a target="_blank" href="https://t.me/Apprantalks" rel="noreferrer">
          <FontAwesomeIcon icon={faTelegram} className='textGradient fs-4 mx-2' />
          </a>
          <a target="_blank" href="https://www.youtube.com/@apprantalks" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} className='textGradient fs-4 mx-2' />
          </a> 
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between flex-wrap text-white text-opacity-75">
        <p className="m-0">
        Copyright © <u>AppRan</u> · All Rights Reserved 
        </p>
        <p className="m-0">
          <a href="/terms-conditions" className="link-light text-opacity-75">
             Terms & Conditions 
          </a>
          <span className="px-1">|</span>
          <a href="/privacy-policy" className="link-light text-opacity-75">
             Privacy Policy 
          </a>
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
