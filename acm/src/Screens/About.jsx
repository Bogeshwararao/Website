import React from 'react'
import Footer from "../Components/Footer"
import Abhi from "../Assets/img2p.jpg"
const About = () => {
  return (
    <>
    <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h2>
                MY VISON 
              </h2>
              <h5 style={{ inlineHeight: "0.5" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4">
              <img src={Abhi} alt="" className="img-fluid animated"  id='Abt-img' />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx">
          <div className="row">
          <div id='img-abt' className="col-lg-6 order1 header-img pt-4">
              <img src={Abhi} alt="" className="img-fluid animated"  id='Abt-img' />
            </div>
            {/* <div className="col">
              <h2>
                MY VISON 
              </h2>
              <h5 style={{ inlineHeight: "0.5" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
              </h5>
            </div> */}
           
         
          <div className="col">
              <h2>
                MY VISON 
              </h2>
              <h5 style={{ inlineHeight: "0.5" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
              </h5>
            </div>
            </div>
        </div>
      </div>
    </div>
    
  </section>
  <Footer/>
  </>
  )
}

export default About