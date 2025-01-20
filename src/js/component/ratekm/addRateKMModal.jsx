import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddRateKMModal() {
    const [show, setShow] = useState(false);
    const [coverageRadius, setCoverageRadius] = useState("");
    const [priceKM, setPriceKM] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="addRateKM">
                            <Form.Label className="mt-2">Radio de cobertura</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Radio de cobertura"
                                value={coverageRadius}
                                onChange={(e) => setCoverageRadius(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPriceKM">
                            <Form.Label className="mt-2">Precio por KM</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Precio por KM"
                                value={priceKM}
                                onChange={(e) => setPriceKM(e.target.value)}
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

export default AddRateKMModal;