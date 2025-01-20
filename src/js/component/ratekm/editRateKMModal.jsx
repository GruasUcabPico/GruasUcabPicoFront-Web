import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";

function EditRateKMModal({ id, coverageRadius, priceKM }) {
    const [show, setShow] = useState(false);
    const [radius, setRadius] = useState(coverageRadius);
    const [price, setPrice] = useState(priceKM);

    const validationSchema = Yup.object().shape({
        radius: Yup.number().required("Radio de cobertura es requerido"),
        price: Yup.number().required("Precio por KM es requerido"),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ coverageRadius, priceKM });
        handleClose();
    };

    const handleClose = () => setShow(false);

    const handleShow = (radius, price) => {
        setRadius(radius);
        setPrice(price);
        setShow(true);
    };

    return (
        <>
            <Button size="sm" variant="light" onClick={() => handleShow(coverageRadius, priceKM)}>
                Editar
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Editar tarifa por KM</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{ radius: coverageRadius, price: priceKM }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            setSubmitting(false);
                        }}
                    >
                        <FormikForm>
                            <Form.Group controlId="coverageRadius">
                                <Form.Label className="mt-2">Radio de cobertura</Form.Label>
                                <Field
                                    className="form-control"
                                    name="radius"
                                    type="number"
                                    value={radius}
                                    onChange={(e) => setRadius(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="priceKM">
                                <Form.Label className="mt-2">Precio por KM</Form.Label>
                                <Field
                                    className="form-control"
                                    name="price"
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Form.Group>
                            <Button className="mt-2" variant="primary" type="submit">
                                Modificar datos
                            </Button>
                        </FormikForm>
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditRateKMModal;