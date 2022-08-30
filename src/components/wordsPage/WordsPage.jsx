import React from "react";
import HeaderBreadcrunb from "../breadcrumbs/HeaderBreadcrunb";
import WordsList from "./WordsList";

function WordsPage() {
  return (
    <>
      <HeaderBreadcrunb title="Words Page" />
      <WordsList />
    </>
  );
}

export default WordsPage;
