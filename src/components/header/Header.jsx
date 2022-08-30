import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <h1>
            ქართული ენა<span>.</span>
          </h1>
        </Link>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="words"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Words
              </NavLink>
            </li>
            <li>
              <NavLink
                to="rules"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Rules
              </NavLink>
            </li>
            <li>
              <NavLink
                to="history"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                History
              </NavLink>
            </li>
            <li>
              <NavLink
                to="gallery"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Gallery
              </NavLink>
            </li>
            <li className="dropdown">
              <a href="/">
                <span>Language</span>{" "}
                <i className="bi bi-chevron-down dropdown-indicator"></i>
              </a>
              <ul>
                <li>
                  <a href="/">
                    English <span className="fi fi-us"></span>
                  </a>
                </li>

                <li>
                  <a href="/">
                    Русский <span className="fi fi-ru"></span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
