import React from "react";
import { useNavigate } from "react-router-dom";

function StartPage() {
  const redirect = useNavigate();

  return (
    <section id="hero" className="hero">
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 data-aos="fade-down">
                Welcome to <span>ქართული ენა</span>
              </h2>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a
                data-aos="fade-up"
                data-aos-delay="200"
                href="#get-started"
                className="btn-get-started"
                onClick={() => redirect("words")}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div
          className="carousel-item active"
          style={{
            backgroundImage:
              "url(assets/img/hero-carousel/carousel/carousel-1.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(assets/img/hero-carousel/carousel/carousel-2.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(assets/img/hero-carousel/carousel/carousel-3.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(assets/img/hero-carousel/carousel/carousel-4.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(assets/img/hero-carousel/carousel/carousel-5.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(assets/img/hero-carousel/carousel/carousel-6.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(assets/img/hero-carousel/carousel/carousel-7.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(assets/img/hero-carousel/carousel/carousel-8.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(assets/img/hero-carousel/carousel/carousel-9.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage:
              "url(assets/img/hero-carousel/carousel/carousel-10.jpg)",
          }}
        ></div>
      </div>
    </section>
  );
}

export default StartPage;
