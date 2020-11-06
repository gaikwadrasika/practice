//var React =require('react');
import React from 'react';
//var ReactDOM =require('react-dom');
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css";
import{BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </>,
    document.getElementById("root"));