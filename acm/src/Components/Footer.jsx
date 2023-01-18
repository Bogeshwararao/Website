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
                <a id='foot-link' href="mailto:acm@sathyabama.ac.in" target="/blank"><li id='foot-hover'>
                   <img src={Email} alt="" /> Mail
                </li></a>
                <a id='foot-link' href="https://www.linkedin.com/company/acm-sist-student-chapter/" target="/blank">
                <li id='foot-hover'>
               
                <img src={Linkedin} alt="" /> Linked in
                </li> </a>
                <a id='foot-link' href="https://instagram.com/acmsist?igshid=YmMyMTA2M2Y=" target="/blank">
                <li id='foot-hover'>
                <img src={Insta} alt="" />  Instagram
                </li>
                </a>
             </ul>
            </div>
              
    </div>
  )
}

export default footer