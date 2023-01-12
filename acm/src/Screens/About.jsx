import React from 'react'
import Abhi from "../Assets/img2p.jpg"
const About = () => {
  return (
    <div>
        <div className='about-con-part1'>
        <img src={Abhi} alt="" className='about-con1'/>
       
        {/* <h3 className='text'>What we are</h3> */}
        <p className='text'>ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.

Founded at the dawn of the computer age, ACM’s reach extends to every part of the globe, with more than half of its more than 100,000 members residing outside the U.S.  Its growing membership has led to Councils in Europe, India, and China, fostering networking opportunities that strengthen ties within and across countries and technical communities.  Their actions enhance ACM’s ability to raise awareness of computing’s important technical, educational, and social issues around the world. </p>
        
        
        
        </div>
        </div>
  )
}

export default About