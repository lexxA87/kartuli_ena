import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import WordForm from "../forms/WordForm";
import WordsTable from "./WordsTable";

function WordsContent() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div>
      <Button onClick={handleShowModal}>New +</Button>
      <WordsTable />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WordForm />
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

export default WordsContent;
