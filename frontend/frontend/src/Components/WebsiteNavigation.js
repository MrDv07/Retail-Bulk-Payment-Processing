import React from "react";
//import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
//import classes from "./WebsiteNavigation.module.css"

function WebsiteNavigation() {

  var bgColors = {
    "Default": "#AE275F",
    "button": "#EB1165"
  };
  return(
    <>
      <div class="p-3 text-center border-bottom bg-maroon" style={{backgroundColor: bgColors.Default}}>
    <div class="container">
      <div class="row gy-3">
        <div class="col-lg-2 col-sm-4 col-4">
          <img src="https://www.axisbank.com/assets/images/logo-white.png" height="35" />
        </div>
        <div class="order-lg-last col-lg-5 col-sm-8 col-8">
          <div class="d-flex float-end border rounded border-light bg-light">
            <a href="http://localhost:3000/uploadexcel" class="border rounded py-1 px-3 nav-link d-flex align-items-center"> <i class="fas fa-shopping-cart m-1 me-md-2"></i><p class="d-none d-md-block mb-0 text-dark">Upload Excel</p> </a>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 col-12">
          <div class="input-group float-center">
            {/* <div class="form-outline">
              <input type="search" id="form1" placeholder="Search" class="form-control" />
            </div>
            <button type="button" class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button> */}
          </div>
        </div>
      </div>
    </div>
        </div>
    </>
)

  
}

export default WebsiteNavigation