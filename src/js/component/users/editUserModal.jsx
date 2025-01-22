import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EditUserModal = ({ user }) => {
    const [show, setShow] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
    });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
          <Button variant="light" onClick={handleShow}>
            Editar
          </Button>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Editar usuario</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Formik
                      initialValues={{ name: user.name || '', email: user.email || '', phoneNumber: user.phoneNumber || ''}}
                      validationSchema={validationSchema}
                      onSubmit={(values, { setSubmitting }) => {
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

export default EditUserModal;