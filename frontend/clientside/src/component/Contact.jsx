import React from "react";

export default function Contact() {
  return (
    <div>
      <section id="contact" className="mb-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 mb-0 text-center">Contact Us</h3>
              <h1 className="display-6 text-center">
                Have some <b>Questions?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <img src="assets/contact.jpg" alt=""  className="w-100"/>
            </div>
            <div className="col-6">
              <form action="">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label fw-bold">
                   Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="arnold gold"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label fw-bold">
                   Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label fw-bold">
                  Your Message
                  </label>
                  <textarea
                  style={{resize:"none"}}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary rounded-pill">Send Messsge</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <hr className="fw-25 m-6"/>
    </div>
  );
}
