import React from "react";
import web from "../src/images/img2.jpg";
import { NavLink } from "react-router-dom";

const About =()=> {
    return(
    <>
    <section id="header" className="d-flex align-item-center">
    <div className="container-fluid nav_bg">
           <div className="row">
                 <div className="col-10 mx-auto">
                    <div className="row">
                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                      <h1> <strong className="brand-name">Welcome to about page</strong>
                      </h1>
                      <h2 className="my-3">
                      Udemy, Inc. is an American massive open online course provider aimed at professional adults 
                      and students. It was founded in May 2010 by Eren Bali, Gagan Biyani, and Oktay Caglar.
                       As of Jan 2020, the platform has more than 35 million students and 57,000 instructors 
                       teaching courses in over 65 languages
                      </h2>
                      <div className="mt-3">
            <NavLink to="/contact"
            className="btn-get-started"><strong>Contact us</strong></NavLink>
                      </div>
                 </div>
                 <div className="col-lg-6 order-lg-2 header-img">
                     <img src={web}className="img-fluid animated" alt="about img" />
                 </div>
                 </div>
                 </div>
           </div>

        </div>

    </section>
    </>
    );
};

export default About;
