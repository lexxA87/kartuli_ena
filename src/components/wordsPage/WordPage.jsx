import React from "react";
import { useParams } from "react-router-dom";
import HeaderBreadcrunb from "../breadcrumbs/HeaderBreadcrunb";

function WordPage() {
  let { id } = useParams();
  return (
    <>
      <HeaderBreadcrunb title="Word page: " />
      <div>WordPage {id}</div>
    </>
  );
}

export default WordPage;
