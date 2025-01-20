import React, {useState} from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm } from 'formik';

const Orders = () => {
    const [incidentLatitude, setIncidentLatitude] = useState('');
    const [incidentLongitude, setIncidentLongitude] = useState('');
    const [destinationLatitude, setDestinationLatitude] = useState('10.4642128');
    const [destinationLongitude, setDestinationLongitude] = useState('-66.976491');
    const [clientDNI, setClientDNI] = useState('');

    const orders = [
        { id: 1, name: 'Order 1', description: 'Description for order 1' },
        { id: 2, name: 'Order 2', description: 'Description for order 2' },
    ];

    const drivers = ['Driver 1', 'Driver 2', 'Driver 3'];

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col md={4}>
                    <h2>Órdenes publicadas</h2>
                    {orders.map(order => (
                        <Card key={order.id} className="mb-3">
                            <Card.Body>
                                <Card.Title>{order.name}</Card.Title>
                                <Card.Text>{order.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
                <Col md={4}>
                    <Formik
                        initialValues={{ incidentLatitude, incidentLongitude, destinationLatitude, destinationLongitude, clientID: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <FormikForm>
                                <Form.Group as={Row}>
                                    <Col>
                                        <Form.Label>Ubicación del incidente (latitud)</Form.Label>
                                        <Field type="number" value={incidentLatitude} name="incidentLatitude" className="form-control" onChange={(e) => setIncidentLatitude(e.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Ubicación del incidente (longitud)</Form.Label>
                                        <Field type="number" value={incidentLongitude} name="incidentLongitude" className="form-control" onChange={(e) => setIncidentLongitude(e.target.value)} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Col>
                                        <Form.Label>Ubicación destino (latitud)</Form.Label>
                                        <Field type="number" value={destinationLatitude} name="destinationLatitude" className="form-control" onChange={(e) => setDestinationLatitude(e.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Ubicación destino (longitud)</Form.Label>
                                        <Field type="number" value={destinationLongitude} name="destinationLongitude" className="form-control" onChange={(e) => setDestinationLongitude(e.target.value)} />
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Cédula del cliente</Form.Label>
                                    <Field type="text" value={clientDNI }name="clientID" className="form-control" onChange={(e) => setClientDNI(e.target.value)} />
                                </Form.Group>
                                <Button type="submit" disabled={isSubmitting} className='mt-3'>
                                    Publicar orden
                                </Button>
                            </FormikForm>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
};

export default Orders;