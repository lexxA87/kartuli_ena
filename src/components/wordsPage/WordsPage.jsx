import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_WORDS } from "../../apollo/words";

import HeaderBreadcrunb from "../breadcrumbs/HeaderBreadcrunb";
import WordsList from "./WordsList";
import NotFound from "../notFound/NotFound";

function WordsPage() {
  const { loading, error, data } = useQuery(GET_ALL_WORDS);
  if (loading)
    return (
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <h2>loading...</h2>
          </div>
        </div>
      </section>
    );

  if (error) return <NotFound />;

  return (
    <>
      <HeaderBreadcrunb title="Words Page" />
      <WordsList words={data.words} />
    </>
  );
}

export default WordsPage;
