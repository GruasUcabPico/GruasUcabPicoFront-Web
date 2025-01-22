import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

function AddCraneModal() {
  const [show, setShow] = useState(false);

  const validationSchema = Yup.object().shape({
    brand: Yup.string().required('Marca es requerida'),
    model: Yup.string().required('Modelo es requerido'),
    craneType: Yup.string().required('Tipo es requerido'),
    year: Yup.string().required('Año es requerido'),
    plate: Yup.string().required('Placa es requerida'),
  });
  
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
          <Formik
              initialValues={{ brand: '', model: '', craneType: '', year: '', plate: ''}}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                  try {
                    axios.post("http://localhost:3000/api/crane", values)
                  } catch (error) {
                      console.log(error);
                  };
                  setSubmitting(false);
                  handleClose();
              }}
          >
              {({ isSubmitting }) => (
                  <Form>
                      <div className="form-group">
                          <label htmlFor="brand">Marca</label>
                          <Field
                              type="text"
                              name="brand"
                              className="form-control"
                          />
                          <ErrorMessage name="brand" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="model">Modelo</label>
                          <Field
                              type="text"
                              name="model"
                              className="form-control"
                          />
                          <ErrorMessage name="model" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="craneType">Tipo de grúa</label>
                          <Field
                              type="text"
                              name="craneType"
                              className="form-control"
                          />
                          <ErrorMessage name="craneType" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="year">Año</label>
                          <Field
                              type="text"
                              name="year"
                              className="form-control"
                          />
                          <ErrorMessage name="year" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="plate">Placa</label>
                          <Field
                              type="text"
                              name="plate"
                              className="form-control"
                          />
                          <ErrorMessage name="plate" component="div" className="invalid-feedback" />
                      </div>
                      <Button variant="primary" type="submit" disabled={isSubmitting}>
                          Submit
                      </Button>
                  </Form>
              )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddCraneModal;
