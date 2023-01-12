import React from 'react'
import "./Footer.css";
import sistlogofoot from "../Assets/sistfoot.png"
import acmfoot from "../Assets/acmfoot.png"
import Email from "../Components/email.png"
import Insta from "../Components/instagram.png"
import Linkedin from "../Components/linkedin.png"
const footer = () => {
  return (
    <div className='footer-bot'>
          
          
          
            <img src={sistlogofoot} alt="" className="sistfootlogo" />
       
            <img src={acmfoot} alt="" className="acmfootlogo" />
            <div>
           <h3 className='con-foot'>Contact us</h3>
             <ul className="con-fotfin">
               
                <li>
                   <img src={Email} alt="" /> Mail
                </li>
                <li>
                <img src={Linkedin} alt="" /> Linked in
                </li>
                <li>
                <img src={Insta} alt="" />  Instagram
                </li>
             </ul>
            </div>
              
    </div>
  )
}

export default footer