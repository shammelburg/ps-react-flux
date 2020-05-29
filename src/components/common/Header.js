import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Pluralsight React with Flux</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" exact to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" to="/courses">Courses</NavLink>
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
