import React from 'react'
import Footer from "../Components/Footer"
import Abhi from "../Assets/img2p.jpg"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {
  useEffect(()=>{
    Aos.init({duration: 1800});
},[]);
  return (
    <>
    <div>
    <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-5">
          <div className="row">
            <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-right">
              <h2>
                MY VISON 
              </h2>
              <h5 style={{ inlineHeight: "0.5" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4 py-5">
              <img src={Abhi} alt="" className="img-fluid animated"  id='Abt-img' data-aos="fade-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </section>
    </div>
    <div>
    <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-5">
          <div className="row">
            <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-left">
              <h2>
                OUR AIM
              </h2>
              <h5 style={{ inlineHeight: "0.5" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 header-img pt-4 py-5" data-aos="fade-right" >
              <img src={Abhi} alt="" className="img-fluid animated"  id='Abt-img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  <div>
  <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-5">
          <div className="row">
            <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-right">
              <h2>
                MY VISON 
              </h2>
              <h5 style={{ inlineHeight: "0.5" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4 py-5">
              <img src={Abhi} alt="" className="img-fluid animated"  id='Abt-img' data-aos="fade-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  <Footer/>
  </>
  )
}

export default About