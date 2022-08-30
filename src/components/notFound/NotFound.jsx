import React from "react";

function NotFound() {
  return (
    <div
      className="breadcrumbs d-flex align-items-center"
      style={{
        backgroundImage:
          "url(assets/img/hero-carousel/carousel/carousel-1.jpg)",
      }}
    >
      <div
        className="container position-relative d-flex flex-column align-items-center"
        data-aos="fade"
      >
        <h2>404</h2>
        <h3>Not Found...</h3>
      </div>
    </div>
  );
}

export default NotFound;
