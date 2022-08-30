import React from "react";
import { useParams } from "react-router-dom";

function WordPage() {
  let { wordId } = useParams();
  return <div>WordPage {wordId}</div>;
}

export default WordPage;
