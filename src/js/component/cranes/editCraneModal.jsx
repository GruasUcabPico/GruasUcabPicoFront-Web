import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";

function EditCraneModal({id,craneBrand,craneModel,craneType,craneYear,cranePlate}){
    const [show, setShow] = useState(false);
    const [brand, setBrand] = useState(craneBrand);
    const [model, setModel] = useState(craneModel);
    const [type, setType] = useState(craneType);
    const [year, setYear] = useState(craneYear);
    const [plate, setPlate] = useState(cranePlate);

    const validationSchema = Yup.object().shape({
        brand: Yup.string().required("Ingrese una marca"),
        model: Yup.string().required("Ingrese un modelo"),
        type: Yup.string().required("Ingrese un tipo"),
        year: Yup.number().required("Ingrese un año"),
        plate: Yup.string().required("Ingrese una placa")
    });

    const handleShow = (brand, model, type, year, plate) => {
        setBrand(brand);
        setModel(model);
        setType(type);
        setYear(year);
        setPlate(plate);
        setShow(true);
    }

    const handleClose = () => setShow(false);
    return <>
        <Button size="sm" variant="light" onClick={() => handleShow(craneBrand,craneModel,craneType,craneYear,cranePlate)}>
            Editar
        </Button>

        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Editar grúa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                initialValues={{ brand: craneBrand, model: craneModel, type: craneType, year: craneYear, plate: cranePlate }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                }}
                >
                <FormikForm>
                    <Form.Group controlId="craneBrand">
                        <Form.Label className="mt-2">Marca</Form.Label>
                        <Field
                            className="form-control"
                            name="brand"
                            type="text"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="craneModel">
                        <Form.Label className="mt-2">Modelo</Form.Label>
                        <Field
                            className="form-control"
                            name="model"
                            type="text"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="craneType">
                        <Form.Label className="mt-2">Tipo</Form.Label>
                        <Field
                            className="form-control"
                            name="craneType"
                            type="text"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="craneYear">
                        <Form.Label className="mt-2">Año</Form.Label>
                        <Field
                            className="form-control"
                            name="year"
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="cranePlate">
                        <Form.Label className="mt-2">Placa</Form.Label>
                        <Field
                            className="form-control"
                            name="plate"
                            type="text"
                            value={plate}
                            onChange={(e) => setPlate(e.target.value)}
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
}

export default EditCraneModal