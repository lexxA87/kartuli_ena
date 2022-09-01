import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import TagForm from "../forms/TagForm";
import TagsTable from "./TagsTable";

function TagsContent() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div>
      <Button onClick={handleShowModal}>New +</Button>
      <TagsTable />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TagForm handleClose={handleCloseModal} />
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
