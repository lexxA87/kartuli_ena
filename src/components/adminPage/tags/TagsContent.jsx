import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_TAGS } from "../../../apollo/tags";
import { Button, Modal } from "react-bootstrap";
import TagForm from "../forms/TagForm";
import TagsTable from "./TagsTable";

function TagsContent() {
  const { loading, error, data: tags, refetch } = useQuery(GET_ALL_TAGS);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div>
      <Button onClick={handleShowModal}>New +</Button>
      <TagsTable loading={loading} error={error} tags={tags} />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TagForm handleClose={handleCloseModal} refetch={refetch} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TagsContent;
