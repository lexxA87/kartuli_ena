import React from "react";
import WordCard from "./WordCard";

function WordsList() {
  const words = [
    { ka: "გამარჯობა!", ru: "Привет!", en: "", role: "other", id: "1" },
    { ka: "გამარჯობა!", ru: "Привет!", en: "Hello!", role: "other", id: "2" },
    { ka: "გამარჯობა!", ru: "Привет!", en: "Hello!", role: "other", id: "12" },
    { ka: "გამარჯობა!", ru: "Привет!", en: "Hello!", role: "other", id: "13" },
    { ka: "გამარჯობა!", ru: "Привет!", en: "Hello!", role: "other", id: "14" },
    {
      ka: "გამარჯობა!",
      ru: "Привет!",
      en: "Hello!",
      role: "other",
      id: "1111",
    },
    { ka: "გამარჯობა!", ru: "Привет!", en: "Hello!", role: "other", id: "122" },
    { ka: "გამარჯობა!", ru: "Привет!", en: "Hello!", role: "other", id: "133" },
  ];
  return (
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">
        <div class="row gy-4">
          {words.map((word) => {
            return <WordCard key={word.id} word={word} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default WordsList;
