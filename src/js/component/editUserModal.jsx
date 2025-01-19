import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditUserModal({ id, userName, userEmail, userPhoneNumber }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [phoneNumber, setPhoneNumber] = useState(userPhoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ userName, userEmail, userPhoneNumber });
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = (name, email, phoneNumber) => {
    setName(name);
    setEmail(email);
    setPhoneNumber(phoneNumber);
    setShow(true);
  };

  return (
    <>
      <Button size="sm" variant="light" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Editar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="editUser">
              <Form.Label className="mt-2">Nombre</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className="mt-2">Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label className="mt-2">Número de teléfono</Form.Label>
              <Form.Control
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Button className="mt-2" variant="primary" type="submit">
              Modificar datos
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditUserModal;
