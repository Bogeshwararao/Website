import React from "react";
// import Abhi from "../assets/images/img2p.jpg"
// import Typed from "react-typed";
import EventsDisplay from "../Components/EventsDisplay";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EventDetails from "../Components/EventDetails";
import Footer from "../Components/Footer";
import Abhi from "../Assets/img2p.jpg"
import {saveAs} from "file-saver";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Event = () => {
  useEffect(()=>{
    Aos.init({duration: 1800});
},[]);
  const handleClick = ()=>{
    let url =  "../Assets/img2p.jpg"  //"https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
    saveAs(url, "Twitter-logo");
   }
  const responsive ={
    superLargeDesktop:{
    breakpoint: {max:4000,min:3000},
    items: 5
  },
  desktop:{
    breakpoint: {max:3000,min:1024},
    items: 3
  },
  tablet:{
    breakpoint: {max:1024,min:464},
    items: 2
  },
  mobile:{
    breakpoint: {max:464,min:0},
    items: 1
  }

};
  const EventDisplay= EventDetails.map((item) =>( <EventsDisplay 
      img={item.img}
      title={item.title}
      discription={item.discription}
  />));
  return (
   <div id="event-total">
  <h1 className="pre-event-title" data-aos="fade-up">Present Event</h1>
   <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h5  style={{ inlineHeight: "1.5" }} data-aos="fade-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4">
              <div data-aos="fade-right">
            <img src={Abhi} alt="" className="img-fluid animated"  id='evt-img' />
            </div>
            <div className="d-flex"  data-aos="fade-up" >
            <button type="button" class="btn btn-primary" id="evt-register">Register</button>
            <button type="button" class="btn btn-primary" id="evt-Brocher" onClick={handleClick}>Download Brocher</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
   <h1 className="pre-event-title">Previous Event</h1>
    <Carousel showDots={true} responsive={responsive}>
        {EventDisplay}
      </Carousel>

<Footer />
   </div>
  );
};

export default Event;
