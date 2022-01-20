import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <footer class="page-footer font-small mdb-color lighten-1 pt-1 bg-secondary">
        <div class=" text-center text-md-left">
          <div class="row bg-light">
            <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1  m-5 p5">
              <h5 class="font-weight-bold text-uppercase mb-4">Thank You!</h5>
              <p>
                Your comments and complements are always the inspiration that
                will motivate me to improve myself.
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none" />
            <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 class="font-weight-bold text-uppercase mb-4">About</h5>

              <ul class="list-unstyled">
                <li>
                  <p>
                    <a href="#!">PROJECTS</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">ABOUT US</a>
                  </p>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none" />
            <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 class="font-weight-bold text-uppercase mb-4">Address</h5>

              <ul class="list-unstyled">
                <li>
                  <p>
                    <i className="fas fa-home mr-3"></i> Chicago, IL 60070, US
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-envelope mr-3"></i>{" "}
                    rabinpantha@gmail.com
                  </p>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-1 d-md-none" />
            <div class="col-md-2 col-lg-2 text-center mx-auto my-4">
              <h5 class="font-weight-bold text-uppercase mb-4">Follow Us</h5>

              <a type="button" class="btn-floating btn-fb p-3">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a type="button" class="btn-floating btn-tw p-3">
                <i class="fab fa-twitter"></i>
              </a>

              <a type="button" class="btn-floating btn-gplus p-3">
                <i class="fab fa-google-plus-g"></i>
              </a>

              <a type="button" class="btn-floating btn-dribbble p-3">
                <i class="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3 text-light">
          © 2020 Copyright:
          <a href="https://dig-it.com/" className="text-light">
            {" "}
            dig-it.com
          </a>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
