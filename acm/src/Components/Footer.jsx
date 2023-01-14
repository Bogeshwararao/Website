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
          
          
          <div className='res-foot'>
            <img src={sistlogofoot} alt="" className="sistfootlogo" />
            </div>
            <div className='res-foot'>
            <img src={acmfoot} alt="" className="acmfootlogo" />
            </div>
            <div className='res-foot'>
           
             <ul className="con-fotfin">
               <li>
               <h3 >Contact us</h3>
               </li>
                <a href="abhiramravipati9@gmail.co" target="/blank"><li>
                   <img src={Email} alt="" /> Mail
                </li></a>
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