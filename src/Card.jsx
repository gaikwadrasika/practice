import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/web.jpg";

const Card =(props)=> {
    return(
    <>
     <div className="col-md-4 col-10 mx-auto">
        <div className="card">
           <img src={props.imgsrc} className="card-img-top" alt="course"/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">20$</p> 
    <NavLink to="" class="btn btn-primary">Add to Cart</NavLink>
  </div>
</div>
</div>  

    </>
    );
};

export default Card;
