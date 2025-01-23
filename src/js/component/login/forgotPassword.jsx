import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

const ForgotPassword = () => {
    const authHeaderFunction = useAuthHeader();
    const authHeader = authHeaderFunction;

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
    });

    const onSubmit = (values, { setSubmitting }) => {
        values.email = 
        axios.put('http://localhost:9053/api/users/changePassword/' + values.email + "?NewPassword=" + values.password, {
          headers: { Authorization: authHeader }
        })
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
                        <label htmlFor="email">Correo</label>
                        <Field
                            type="email"
                            name="email"
                            className="form-control"
                        />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>
                        <div className="form-group">
                            <label htmlFor="password">Contrasena</label>
                            <Field
                                type="password"
                                name="password"
                                className="form-control"
                            />
                            <ErrorMessage name="password" component="div" className="text-danger" />
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