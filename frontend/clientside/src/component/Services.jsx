import React from "react";
import { BsServer, BsCodeSlash, BsTools } from "react-icons/bs";

export default function Services() {
  return (
    <div>
      <section id="services">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div className="fs-5 text-center">
                <h3 className="fs-5 text-center">Our Services</h3>
                <h1 className="display-6 text-cennter mb-4">
                  Our <b>Aweswome</b> Services
                </h1>
                <hr className="w-25 mx-auto" />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div class="card p-3 mb-0 services-height">
                <div class="card-body text-center mb-0">
                <h1 className="fs-12"> <BsServer  /></h1>

                  <h5 class="card-title mt-3">MongoDB</h5>
                  <p className="card-text fs-6">
                    High proficiency in working with this database and all its features,
                    including features like Aggregate pipeline
                  </p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3 services-height">
                <div class="card-body text-center">
                  
                  <h1 className="fs-12"> <BsCodeSlash /></h1>
                  <h5 class="card-title mt-3">Node js</h5>
                  <p class="card-text mb-3 ">
                    Proficient in Carrying out all CRUD operations,
                    Protecting Routes,
                    Authorization,
                    Authentication,
                    Middleware,
                    Error Handling
                   </p>
                  {/*<a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3 services-height">
                <div class="card-body text-center">
                 <h1 className="fs-12 mt-3"> <BsTools /></h1>
                  <h5 className="card-title fs-12 mb-3">Mongose & Express</h5>
                  <p class="card-text ">
                    The use of Express for better routing,
                    And mongoose for better database queries
                  </p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
