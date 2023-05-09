import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) { 
    
    const OnColorChange = (e) => { 
        document.body.style.backgroundColor = "rgb(15 54 92)";
    }
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-body-dark navbar-dark  bg-dark`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.name}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/forms"
                >
                  {props.homeText}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
            </div>
            <div className="form-check mx-1">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="danger"
                onChange={props.changeTheme}
              />
              <label
                className="form-check-label text-danger"
                htmlFor="exampleRadios1"
              >
                Red
              </label>
            </div>
            <div className="form-check mx-1">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="warning"
                onChange={props.changeTheme}
              />
              <label
                className="form-check-label text-warning"
                htmlFor="exampleRadios2"
              >
                Yallow
              </label>
            </div>
            <div className="form-check mx-1">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="success"
                onChange={props.changeTheme}
              />
              <label
                className="form-check-label text-success"
                htmlFor="exampleRadios3"
              >
                Green
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  homeText: PropTypes.string,
};

Navbar.defaultProps = {
  name: "Aman",
  aboutText: "About Aman",
  homeText: "Home Aman",
};
