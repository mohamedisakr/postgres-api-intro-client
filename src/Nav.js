import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/adddept"
            // to={`/${process.env.REACT_APP_ADD_NEW_DEPARTMENT_ROUTE}`}
          >
            Department
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/">
            {process.env.REACT_APP_ADD_NEW_DEPARTMENT_ROUTE
              ? process.env.REACT_APP_ADD_NEW_DEPARTMENT_ROUTE
              : "error"}
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
