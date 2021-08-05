import React, { Component } from "react";

import logo1 from "../../Assets/logo1.png";
class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "white" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo1} alt="logo" style={{ marginLeft: "100px" }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul
                className="navbar-nav mr-auto mb-2 mb-lg-0"
                style={{ marginLeft: "300px", fontFamily: "Poppins", fontSize: "1.2em" }}
              >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    LIVE DEMO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    BLOCKS
                  </a>
                </li>
              </ul>
              <form className="d-flex" style={{ marginLeft: "250px" }}>
                <button className="btn btn-outline-dark" type="submit">
                  Visit Chruch
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
