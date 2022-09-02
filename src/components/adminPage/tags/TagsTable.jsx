import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Spinner, Alert } from "react-bootstrap";

function TagsTable(props) {
  const { loading, error, tags } = props;

  console.log(tags);

  if (loading) {
    return <Spinner animation="border" variant="secondary" />;
  }
  if (error) {
    return <Alert variant="danger">Somthing wrong...</Alert>;
  }
  return <div>TagsTable</div>;
}

export default TagsTable;
