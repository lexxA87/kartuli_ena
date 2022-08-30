import React from "react";
import { Link } from "react-router-dom";

function WordCard(props) {
  const { ka, ru, en, id, role } = props.word;
  return (
    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div className="service-item  position-relative">
        <div className="icon">
          <i className="fa-solid fa-mountain-city"></i>
        </div>
        <h3>{ka}</h3>
        <p>
          {ru}
          <hr />
          {en}
        </p>
        <Link to={`/word${id}`} className="readmore stretched-link">
          Learn more <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default WordCard;
