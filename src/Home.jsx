import React from "react";
import web from "../src/images/web.jpg";
const Home =()=> {
    return(
    <>
    <section id="header" className="d-flex align-center">
    <div className="container-fluid nav_bg">
           <div className="row">
                 <div className="col-10 mx-auto">
                    <div className="row">
                 <div className="col-md-6 pt-5 pt-lg-0 order-lg-1">
                      <h1>The world's largest selection of <strong className="font-color:#3498db"> Technical courses</strong>
                      </h1>
                      <h2 className="my-3">
                          Improve your technical skills with us
                      </h2>
                      <div className="mt-3">
            <a href="https://www.youtube.com/watch?v=X8uqqd5aqBI"
            className="font-size: 1.5rem;font-color:#3498db"><strong>Get Started</strong></a>
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
