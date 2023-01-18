// eslint-disable-next-line
import React, { useState ,Component } from "react";
import Footer from "../Components/Footer"
import "react-toastify/dist/ReactToastify.css";
import Contactimg from "../Assets/contact.svg"
 import Axios from 'axios'
const Contact = () => {
    const url ="./http://localhost:5000/Contact"
    const [data,setData]= useState({
      username:"",
      useremail:"",
      userphone:""
    })
    function submit(e) {
         e.preventDefault();
         Axios.post(url,{
          username:data.username,
          useremail:data.useremail,
          userphone:data.useremail
         })
         .then(res =>{
          console.log(res.data)
         })
    }



    function handle(e){
      const newdata ={...data}
      newdata[e.target.id]= e.target.value
      setData(newdata)
      console.log(newdata)
    }
  return (
    <>
    <form onSubmit={(e)=>submit(e)}>      
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
                      <input  onChange={(e)=>handle(e)} id="username" value={data.username}  class="form-control" type="text"  placeholder="Enter your name" required
                     />
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="email">E-mail :</label>
                      <input
                      placeholder="Enter your email" required
                        class="form-control"
                        type="email"
                
                        onChange={(e)=>handle(e)} id="useremail" value={data.useremail}  />
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="phone">Phone number :</label>
                      <input
                      placeholder="Enter your phone number" required
                        class="form-control"
                        type="tel"
                        onChange={(e)=>handle(e)} id="userphone" value={data.userphone}
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
    </form>
      <Footer />
    </>
  );
};

export default Contact;
