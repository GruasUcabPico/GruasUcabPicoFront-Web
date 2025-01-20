import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik, Form as FormikForm, Field } from "formik";

function AssignCraneModal({ id, cranes }) {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("yeh");
    handleClose();
  };

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Button size="sm" variant="light" onClick={() => handleShow()}>
        Asignar grúa
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Editar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select>
            <option>Seleccione una grúa</option>
            {cranes.map((crane) => (
                <option key={crane.id} value={crane.id}>
                {crane.brand} {crane.model} </option>
            ))}
          </Form.Select>
          <Button className="mt-2" variant="primary" type="submit" onSubmit={(handleSubmit)}>Asignar</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AssignCraneModal;