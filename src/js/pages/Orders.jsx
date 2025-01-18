import React from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm } from 'formik';

const Orders = () => {
    const orders = [
        { id: 1, name: 'Order 1', description: 'Description for order 1' },
        { id: 2, name: 'Order 2', description: 'Description for order 2' },
    ];

    const drivers = ['Driver 1', 'Driver 2', 'Driver 3'];

    return (
        <Container fluid>
            <Row>
                <Col md={4}>
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
                        initialValues={{ orderName: '', orderDescription: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <FormikForm>
                                <Form.Group>
                                    <Form.Label>Order Name</Form.Label>
                                    <Field type="text" name="orderName" className="form-control" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Order Description</Form.Label>
                                    <Field type="text" name="orderDescription" className="form-control" />
                                </Form.Group>
                                <Button type="submit" disabled={isSubmitting}>
                                    Create Order
                                </Button>
                            </FormikForm>
                        )}
                    </Formik>
                </Col>
                <Col md={4}>
                    <ListGroup>
                        {drivers.map((driver, index) => (
                            <ListGroup.Item key={index} className="d-flex align-items-center">
                                <div className="circle bg-primary text-white mr-3" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {driver.charAt(0)}
                                </div>
                                {driver}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Orders;