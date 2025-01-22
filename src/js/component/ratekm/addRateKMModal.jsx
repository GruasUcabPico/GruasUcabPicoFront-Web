import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

function AddRateKMModal() {
    const [show, setShow] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        try {
        axios.post("http://localhost:3000/RateKM", values)
        } catch (error) {
            console.log(error);
        };
        console.log({ coverageRadius, priceKM });
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
                    <Modal.Title>Agregar nueva tarifa por KM</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{ coverageRadius: '', priceKM: ''}}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            try {
                                axios.post("http://localhost:3000/cranes", values)
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
                                    <label htmlFor="coverageRadius">Radio de cobertura</label>
                                    <Field
                                        type="number"
                                        name="coverageRadius"
                                        className="form-control"
                                    />
                                    <ErrorMessage name="coverageRadius" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="priceKM">Precio por Km</label>
                                    <Field
                                        type="number"
                                        name="priceKM"
                                        className="form-control"
                                    />
                                    <ErrorMessage name="priceKM" component="div" className="invalid-feedback" />
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

export default AddRateKMModal;