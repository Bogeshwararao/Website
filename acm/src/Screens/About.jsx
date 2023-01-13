import React from 'react'
import Abhi from "../Assets/img2p.jpg"
const About = () => {
  return (
    <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h5 className="text-muted" style={{ inlineHeight: "1.5" }}>
              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4">
              <img src={Abhi} alt="" className="img-fluid animated" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About