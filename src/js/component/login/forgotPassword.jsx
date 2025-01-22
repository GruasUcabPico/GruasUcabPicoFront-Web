import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const ForgotPassword = () => {
    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
    });

    const onSubmit = (values, { setSubmitting }) => {
        // Handle form submission
        //axios.post('http://localhost:9053/api/users/forgot-password', values)
        console.log(values);
        setSubmitting(false);
    };

    return (
        <Container>
            <h2>Forgot Password</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <Field
                                type="email"
                                name="email"
                                className="form-control"
                            />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default ForgotPassword;