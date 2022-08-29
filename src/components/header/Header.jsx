import React from "react";

function Header() {
  return (
    <header id="header" class="header d-flex align-items-center">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
          <h1>
            ქართული ენა<span>.</span>
          </h1>
        </a>

        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a href="index.html" class="active">
                Home
              </a>
            </li>
            <li>
              <a href="about.html">Words</a>
            </li>
            <li>
              <a href="services.html">Rules</a>
            </li>
            <li>
              <a href="projects.html">History</a>
            </li>
            <li>
              <a href="blog.html">Gallery</a>
            </li>
            <li class="dropdown">
              <a href="#">
                <span>Language</span>{" "}
                <i class="bi bi-chevron-down dropdown-indicator"></i>
              </a>
              <ul>
                <li>
                  <a href="#">
                    English <span class="fi fi-us"></span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    Русский <span class="fi fi-ru"></span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
