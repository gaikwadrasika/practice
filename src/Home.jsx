import React from "react";
import web from "../src/images/web.jpg";
import { NavLink } from "react-router-dom";

const Home =()=> {
    return(
    <>
    <section id="header" className="d-flex align-item-center">
    <div className="container-fluid nav_bg">
           <div className="row">
                 <div className="col-10 mx-auto">
                    <div className="row">
                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                      <h1>The world's largest selection of <strong className="brand-name"> Technical courses</strong>
                      </h1>
                      <h2 className="my-3">
                          Improve your technical skills with us
                      </h2>
                      <div className="mt-3">
            <NavLink to="/course"
            className="btn-get-started"><strong>Get Started</strong></NavLink>
                      </div>
                 </div>
                 <div className="col-lg-6 order-lg-2 header-img">
                     <img src={web}className="img-fluid animated" alt="home img" />
                 </div>
                 </div>
                 </div>
           </div>

        </div>

    </section>
    </>
    );
};

export default Home;
