import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function DeleteUserModal({ user }) {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(values);
    try {
      axios.delete(`http://localhost:3000/api/users/${id}`);
    } catch (error) {
      console.error(error);
    };
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Eliminar usuario
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton variant="danger">
          <Modal.Title>Eliminar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Seguro de que desea eliminar a {user.name}?</Modal.Body>
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

export default DeleteUserModal;
