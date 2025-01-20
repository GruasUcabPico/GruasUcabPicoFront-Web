import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddCraneModal() {
    const [show, setShow] = useState(false);
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [craneType, setCraneType] = useState('');
    const [year, setYear] = useState('');
    const [plate, setPlate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ brand, model, craneType, year, plate });
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
          <Modal.Title>Agregar nueva grúa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="craneBrand">
              <Form.Label className="mt-2">Marca</Form.Label>
              <Form.Control
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="craneModel">
              <Form.Label className="mt-2">Modelo</Form.Label>
              <Form.Control
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="craneType">
              <Form.Label className="mt-2">Tipo</Form.Label>
              <Form.Control
                type="text"
                value={craneType}
                onChange={(e) => setCraneType(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="craneYear">
              <Form.Label className="mt-2">Año</Form.Label>
              <Form.Control
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="cranePlate">
              <Form.Label className="mt-2">Placa</Form.Label>
              <Form.Control
                type="text"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
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

export default AddCraneModal;
