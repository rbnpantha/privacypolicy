import React, { Component } from "react";
import DisplayContent from "./DisplayContent";
import { Form, FormControl } from "react-bootstrap";

class PrivacyPolicyMain extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">
          <div className="col-6 col-md-2 clo-xl-2 bd-sidebar mb-2 border-right border-bottom">
            <Form className="form-center p-2">
              <FormControl type="text" placeholder="Search" className="" />
            </Form>
            <ul>
              <a href="#">test sidebar</a>
            </ul>
            <ul>
              <a href="#">test sidebar</a>
            </ul>
            <ul>
              <a href="#">test sidebar</a>
            </ul>
            <ul>
              <a href="#">test sidebar</a>
            </ul>
            <ul>
              <a href="#">test sidebar</a>
            </ul>
            <ul>
              <a href="#">test sidebar</a>
            </ul>
            <ul>
              <a href="#">test sidebar</a>
            </ul>
            <ul>
              <a href="#">test sidebar</a>
            </ul>
          </div>
          <main
            className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content"
            role="main"
          >
            <DisplayContent />
          </main>
          <div className="col-6 col-md-2 clo-xl-2 mb-2 border-left">
            <h2>Most Popular Blogs</h2>
            <ul>
              <a href="#">Blog Post 1</a>
            </ul>
            <ul>
              <a href="#">Blog Post 2</a>
            </ul>
            <ul>
              <a href="#">Blog Post 3</a>
            </ul>
            <ul>
              <a href="#">Blog Post 4</a>
            </ul>
            <ul>
              <a href="#">Blog Post 5</a>
            </ul>
            <ul>
              <a href="#">Blog Post 6</a>
            </ul>
            <ul>
              <a href="#">Blog Post 7</a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicyMain;
