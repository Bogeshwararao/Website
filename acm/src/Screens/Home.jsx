import React from 'react'
import Slider from '../Components/Slider/Slider'
import Footer from '../Components/Footer'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 1800});
},[]);
  return (
    <>
    <div data-aos="fade-left">
        <Slider />
        
        <br></br>
      <br></br>
      <div   data-aos="fade-up">
                       <h1 className="abt"> About ACM Organisation</h1>
                       </div>
                       <div   data-aos="fade-left">
                       <p id="ph1" className="abt-con1">ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.</p>
                       </div>
                       <div   data-aos="fade-right">
                       <p id="ph2" className="abt-con2">ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.</p>
                       

                </div>
                </div>

                       <Footer />
               </>       
                       
  )
}

export default Home