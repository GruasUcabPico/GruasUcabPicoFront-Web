import React, {useState} from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm } from 'formik';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import Header from '../component/header';

const Orders = () => {
    const [incidentLatitude, setIncidentLatitude] = useState('');
    const [incidentLongitude, setIncidentLongitude] = useState('');
    const [destinationLatitude, setDestinationLatitude] = useState('10.4642128');
    const [destinationLongitude, setDestinationLongitude] = useState('-66.976491');
    const [clientDNI, setClientDNI] = useState('');
    
    const order = {
        id: 1,
        contract: "Contract A",
        driverAssigned: "Driver 1",
        operator: "Operator 1",
        startLocationLat: 10.4627,
        startLocationLng: -66.9759,
        incidentLocationLat: 10.4527,
        incidentLocationLng: -66.9059,
        destinationLocationLat: 10.4833,
        destinationLocationLng: -66.8666,
        incidentDateTime: "2023-10-01T10:00:00Z",
        totalCost: 1000,
        extraCostApplied: 50,
        ratesPerKm: 5,
        orderStatus: "Pending"
    };

    const orders = [
        { id: 1, name: 'Orden 1', description: 'Descripcion 1' },
        { id: 2, name: 'Orden 2', description: 'Descripcion 2' },
    ];

    const drivers = ['Driver 1', 'Driver 2', 'Driver 3'];

    return (
        <Container fluid>
            <Header />
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
                    <APIProvider apiKey={'AIzaSyCBZK2rXSKMDn9vM9d7f9LJ4G-MHwywJW4'}>
                        <Map
                        style={{width: '90%', height: '250px'}}
                        defaultCenter={{lat: (order.startLocationLat + order.destinationLocationLat)/2, lng: (order.startLocationLng + order.destinationLocationLng)/2}}
                        defaultZoom={12}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}>
                            <Marker position={{lat: order.startLocationLat, lng: order.startLocationLng}} label="Punto de partida" />
                            <Marker position={{lat: order.incidentLocationLat, lng: order.incidentLocationLng}} label="Punto del incidente" />
                            <Marker position={{lat: order.destinationLocationLat, lng: order.destinationLocationLng}} label="Punto de llegada" />
                        </Map>
                    </APIProvider>
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