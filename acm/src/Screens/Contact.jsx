// eslint-disable-next-line
import React, { useState } from "react";
import Footer from "../Components/Footer"
import "react-toastify/dist/ReactToastify.css";
import Contactimg from "../Assets/contact.svg"
 
const Contact = () => {
 
  return (
    <>
     <section>
      <div
        class="d-flex flex-column min-vh-100 justify-content-center"
      >
        <div class="container">
          <div class="row" >
<div class="col-sm-12 col-md-10 mx-auto bg-white rounded shadow">
              <div class="row">
                <div class="col-md-6">
                  <div class="m-5 text-center"><h1>Welcome!</h1></div>

                  <form class="m-5">
                    <div class="mb-3">
                      <label class="form-label" for="username">Username :</label>
                      <input class="form-control" type="text" id="username" placeholder="Enter your name" required/>
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="email">E-mail :</label>
                      <input
                      placeholder="Enter your email" required
                        class="form-control"
                        type="email"
                        id="email"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="phone">Phone number :</label>
                      <input
                      placeholder="Enter your phone number" required
                        class="form-control"
                        type="tel"
                        id="phone"
                      />
                    </div>
                    <div class="">
                      <input
                        type="submit"
                        class="form-control btn btn-primary mt-3"
                      />
                    </div>
                  </form>
                </div>
                <div class="col-md-6">
                  <div id="contact-img">
                    <img
                      src={Contactimg}
                      alt=""
                      class="img-fluid p-5 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
