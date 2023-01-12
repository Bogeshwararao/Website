// eslint-disable-next-line
import React, { useState } from "react";
import Footer from "../Components/Footer"
import "react-toastify/dist/ReactToastify.css";
import "../Components/contact.css"

const Contact = () => {
 
  return (
    <>
    {/* < Demo /> */}
    <div class="container-con">
  <div class="row  ">
    <div >
      <div className="con-full">
        <div >
          <h2 >Contact Form</h2>
        </div>
        <div>
          <form>
            <div id="con-name">
              <label for="name">Name</label>
              <input type="text" id="name" class="form-group" placeholder="Enter your name" required />
            </div>
            <div id="con-mail">
              <label for="email">Email</label>
              <input type="email" class="form-group" id="email" placeholder="Enter your email" required />
            </div>
            <div id="con-phone">
              <label for="phone">Phone Number</label>
              <input type="tel"  id="phone" class="form-group" placeholder="Enter your phone number" required />
            </div>
            <button type="submit" id="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
      <Footer />
    </>
  );
};

export default Contact;
