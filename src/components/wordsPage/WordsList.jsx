import React from "react";

import WordCard from "./WordCard";

function WordsList(props) {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          {props.words.map((word) => {
            return <WordCard key={word.id} word={word} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default WordsList;
