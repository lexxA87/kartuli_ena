import React from "react";

function HeaderBreadcrunb(props) {
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
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default HeaderBreadcrunb;
