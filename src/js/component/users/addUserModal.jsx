import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

const AddUserModal = () => {
    const [show, setShow] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        role: Yup.string().oneOf(['Driver', 'Operator'], 'Invalid role').required('Role is required'),
    });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const authHeaderFunction = useAuthHeader();
  const authHeader = authHeaderFunction;

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
                      initialValues={{ dni: '', name: '', email: '', password: '', phone: ''}}
                      validationSchema={validationSchema}
                      
                      onSubmit={(values, { setSubmitting }) => {

                          let valuesSubmit = values;
                          let endpointLink = "http://localhost:9053/api/users/";

                          if (valuesSubmit.role === "Driver") {
                            delete valuesSubmit.role;
                            valuesSubmit.activeLicense = true;
                            endpointLink = endpointLink + "drivers";
                          } else {
                            delete valuesSubmit.role;
                            delete valuesSubmit.dni;
                            endpointLink = endpointLink + "operators";
                          }
                          
                          try {
                            axios.post(endpointLink, valuesSubmit, {headers: {Authorization: authHeader}});
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
                                  <label htmlFor="dni">Cedula</label>
                                  <Field
                                      type="text"
                                      name="dni"
                                      className="form-control"
                                  />
                                  <ErrorMessage name="ndni" component="div" className="invalid-feedback" />
                              </div>
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
                                  <label htmlFor="password">Contraseña</label>
                                  <Field
                                      type="password"
                                      name="password"
                                      className="form-control"
                                  />
                                  <ErrorMessage name="password" component="div" className="invalid-feedback" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="phone">Número telefónico</label>
                                  <Field
                                      type="text"
                                      name="phone"
                                      className="form-control"
                                  />
                                  <ErrorMessage name="phone" component="div" className="invalid-feedback" />
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