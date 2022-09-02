import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_TAG } from "../../../apollo/tags";
import { Button } from "react-bootstrap";

function ButtonsActionsTable({ object, refetch }) {
  const [deleteTag] = useMutation(DELETE_TAG);

  const editForm = () => {
    console.log("edit form");
  };

  const handleDelete = () => {
    const id = object.id;
    deleteTag({
      variables: {
        id: id,
      },
    }).then((data) => {
      refetch();
    });
  };

  return (
    <div className="text-center">
      <Button
        size="sm"
        variant="outline-success"
        className="me-2"
        onClick={editForm}
      >
        <i className="bi bi-pencil-square"></i> Edit
      </Button>
      <Button size="sm" variant="outline-danger" onClick={handleDelete}>
        <i className="bi bi-trash3"></i>
      </Button>
    </div>
  );
}

export default ButtonsActionsTable;
