import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddUserModal = () => {
    const [show, setShow] = useState(false);
    // :3

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        role: Yup.string().oneOf(['Driver', 'Operator'], 'Invalid role').required('Role is required'),
    });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
          <Button variant="success" onClick={handleShow}>
            Añadir
          </Button>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Añadir usuario</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Formik
                      initialValues={{ name: '', email: '', phoneNumber: ''}}
                      validationSchema={validationSchema}
                      onSubmit={(values, { setSubmitting }) => {
                          console.log(values);
                          let valuesSubmit = values;
                          delete valuesSubmit.role;
                          try {
                            axios.post("http://localhost:3000/users", valuesSubmit)
                          } catch (error) {
                              console.log(error);
                          };
                          console.log(values);
                          setSubmitting(false);
                          handleClose();
                      }}
                  >
                      {({ isSubmitting }) => (
                          <Form>
                              <div className="form-group">
                                  <label htmlFor="name">Nombre completo</label>
                                  <Field
                                      type="text"
                                      name="name"
                                      className="form-control"
                                  />
                                  <ErrorMessage name="name" component="div" className="invalid-feedback" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="email">Correo electrónico</label>
                                  <Field
                                      type="email"
                                      name="email"
                                      className="form-control"
                                  />
                                  <ErrorMessage name="email" component="div" className="invalid-feedback" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="phoneNumber">Número telefónico</label>
                                  <Field
                                      type="text"
                                      name="phoneNumber"
                                      className="form-control"
                                  />
                                  <ErrorMessage name="phoneNumber" component="div" className="invalid-feedback" />
                              </div>
                              <div className="form-group">
                                <div className="form-check">
                                  <Field
                                    type="radio"
                                    name="role"
                                    value="Driver"
                                    className="form-check-input"
                                    id="roleDriver"
                                  />
                                  <label className="form-check-label" htmlFor="roleDriver">
                                    Driver
                                  </label>
                                </div>
                                <div className="form-check">
                                  <Field
                                    type="radio"
                                    name="role"
                                    value="Operator"
                                    className="form-check-input"
                                    id="roleOperator"
                                  />
                                  <label className="form-check-label" htmlFor="roleOperator">
                                    Operator
                                  </label>
                                </div>
                                <ErrorMessage name="role" component="div" className="invalid-feedback" />
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
};

export default AddUserModal;