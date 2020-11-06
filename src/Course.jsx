import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/web.jpg";

const Course =()=> {
    return(
    <>
    <div className="my-5">
        <h1 className="text5-center">Our Courses</h1>
    </div>
    <div className="container-fluid mb-5">
   
   <div className="row">
       <div className="col-10 mx-auto">
            <div className="row">
                <div className="col-md-4 col-10 mx-auto">
                <div class="card" style="width: 18rem;">
  <img src="{web}" class="card-img-top" alt="course"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/contact" class="btn btn-primary">Go somewhere</NavLink>
                </div>
               </div>
                </div>
            </div>
       </div>
   </div>

    </div>
    </>
    );
};

export default Course;
