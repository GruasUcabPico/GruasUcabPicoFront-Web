import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";

function AssignCraneModal({ user, cranes }) {
  const [show, setShow] = useState(false);
  const [selectedCrane, setSelectedCrane] = useState("");

  const validationSchema = Yup.object().shape({
      craneId: Yup.string().notOneOf([""], "Seleccione una grúa").required("Seleccione una grúa"),
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button size="sm" variant="light" onClick={handleShow}>
        Seleccionar Grúa
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Seleccionar Grúa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ crane: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              onSubmit(values.crane);
              setSubmitting(false);
              handleClose();
            }}
          >
            <FormikForm>
              <Form.Group controlId="craneSelect">
                <Form.Label className="mt-2">Grúa</Form.Label>
                <Field
                  as="select"
                  name="crane"
                  className="form-control"
                  value={selectedCrane}
                  onChange={(e) => setSelectedCrane(e.target.value)}
                >
                  <option value="" label="Seleccione una grúa" />
                  {cranes.map((crane) => (
                    <option 
                      key={crane.id} 
                      value={crane.id} 
                      label={crane.brand + " " + crane.model + " (" + crane.plate + ")"}
                    />
                  ))}
                </Field>
              </Form.Group>
              <Button className="mt-2" variant="primary" type="submit">
                Seleccionar
              </Button>
            </FormikForm>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AssignCraneModal;