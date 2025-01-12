import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddUserModal() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, phoneNumber });
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Añadir
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Agregar nuevo usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="addUser">
              <Form.Label className="mt-2">Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre y apellido"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className="mt-2">Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Dirección de correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label className="mt-2">Número de teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Número de teléfono"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Añadir
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddUserModal;
