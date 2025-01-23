import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import axios from 'axios';

function AssignCraneModal({ user }) {
  const [show, setShow] = useState(false);
  const [selectedCrane, setSelectedCrane] = useState("");
  const authHeaderFunction = useAuthHeader();
  const authHeader = authHeaderFunction;
  
  const [cranes, setCranes] = useState([]);

  useEffect(() => {
    const fetchCranes = async () => {
      try {
        const response = await axios.get("http://localhost:8053/api/crane?PerPage=3&Page=1&IsActive=true", {
          headers: { Authorization: authHeader }
        });
        setCranes(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error al obtener grúas", error);
      }
    };

    fetchCranes();
  }, [authHeader]);


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

      <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>Assign Crane</Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={{ crane: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.patch(`http://localhost:9053/api/users/drivers/${values.id}/assign-crane`, {headers: {Authorization: authHeader}});
                    setSubmitting(false);
                    handleClose();
                }}
            >
                {({ isSubmitting }) => (
                    <FormikForm>
                        <Modal.Body>
                            <Form.Group controlId="formCrane">
                                <Form.Label>Select Crane</Form.Label>
                                <Field as="select" name="crane" className="form-control">
                                    <option value="" label="Select a crane" />
                                    {cranes.map((crane) => (
                                        <option key={crane.id} value={crane.id}>
                                            {crane.brand} {crane.model} ({crane.plate})
                                        </option>
                                    ))}
                                </Field>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={(handleClose)}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit" disabled={isSubmitting}>
                                Assign Crane
                            </Button>
                        </Modal.Footer>
                    </FormikForm>
                )}
            </Formik>
        </Modal>
    </>
  );
}

export default AssignCraneModal;