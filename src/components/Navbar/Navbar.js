import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Rick & Morty <span className="text-primary">Wiki</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5 ">
            {/* React router dosen't support activeClassName in V6 */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " activated" : "")
              }
            >
              Characters
            </NavLink>
            <NavLink
              to="/episodes"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " activated" : "")
              }
            >
              Episodes
            </NavLink>
            <NavLink
              to="/location"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " activated" : "")
              }
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
