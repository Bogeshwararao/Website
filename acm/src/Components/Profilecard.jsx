import React from "react";
import Insta from "./instagram.png";
import Linked from "./linkedin.png";
import Mail from "./email.png";
const Profilecard = (props) => {
  return (
    
    <div className="col-md-3 col-0 mx-auto my-2">
      <div data-aos="fade-left row">
      <div className="card blog-card ">
     
          <img
           id="Profile-img"
            className="card-img-top Project-Card-img rounded-circle"
            src={props.imgsrc}
            alt="Card-img"
          />
       
        <div className="card-body">
          <h5 id="Title-team" className="card-title font-weight-bold">{props.title}</h5>
          <p id="Title-team-des" className="card-text">{props.description}</p>
          <ul className="d-flex list-icon" id="Profile-links">
          
          <li  id="Mail-icon"><a href={props.maillink}><img src={Mail} alt="" target="/blank" ></img></a></li>
          <li  id="Linked-icon" ><a href={props.linkedinlink}><img src={Linked} alt="" target="/blank" ></img></a></li>
            <li  id="Insta-icon"><a href={props.instalink}><img src={Insta} alt="" target="/blank"></img></a></li>
          
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Profilecard;