import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function DeleteRateKMModal({ id  }) {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ id });
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Eliminar tasa
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton variant="danger">
          <Modal.Title>Eliminar tasa</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Seguro de que desea eliminar esta tarifa?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No, volver
          </Button>
          <Button variant="danger" onClick={handleSubmit}>
            Sí, eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteRateKMModal;
