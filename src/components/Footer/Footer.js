import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faYoutube,faFacebook,faLinkedin, faInstagram, faTwitter} from "@fortawesome/fontawesome-free-brands"
import './Footer.css'

function Footer() {
  return (
    <div className='footer-div'>
     <div className='icon-list'>
                <ul>
                    <li><FontAwesomeIcon size='lg' icon={faYoutube}/></li>
                    <li><FontAwesomeIcon size='lg' icon={faFacebook}/></li>
                    <li><FontAwesomeIcon size='lg' icon={faLinkedin}/></li>
                    <li><FontAwesomeIcon size='lg' icon={faInstagram}/></li>
                    <li><FontAwesomeIcon size='lg' icon={faTwitter}/></li>
                </ul>
            </div>
            <div className='terms'>
                <p>Terms of services</p>
                <p>privacy policy</p>
            </div>
            <div className='copyright'>Copyright 2021 Peddle Technologies. All Rights Reserved</div>
    </div>
  )
}

export default Footer