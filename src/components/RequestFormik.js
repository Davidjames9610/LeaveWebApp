import React from 'react';
import moment from 'moment';

import { Row, Col, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';

import { useFormik } from 'formik';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    reason: Yup.string()
        .required('Required')
        .min(2, 'Too Short!'),
    type: Yup.string()
        .required('A Type is Required')
});

const RequestFormik = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: SignupSchema,
    });

    return (
        <form className="form__container" onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <p>errors: {formik.errors.firstName}</p>
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <Row>
                <Col>
                    <FormGroup>
                        <FormLabel>Reason</FormLabel>
                        <p>error: {formik.errors.reason}</p>
                        <FormControl
                            as="textarea"
                            rows={3}
                            id="reason"
                            name="reason"
                            value={formik.values.reason}
                            onChange={formik.handleChange}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <FormLabel>Example select</FormLabel>
                        <p>error: {formik.errors.type}</p>
                        <FormControl
                            as="select"
                            id="type"
                            name="type"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                        >
                            <option value="" label="Select a type" />
                            <option value="Sick">Sick</option>
                            <option value="Casual">Casual</option>
                            <option value="Maternity">Maternity</option>
                            <option value="Paternity">Paternity</option>
                            <option value="Bereavement">Bereavement</option>
                            <option value="Compensatory">Compensatory</option>
                            <option value="Sabbatical">Sabbatical</option>
                            <option value="Unpaid">Unpaid</option>
                        </FormControl>
                    </FormGroup>
                </Col>
            </Row>
            <button type="submit">Submit</button>
        </form>
    );
};

export { RequestFormik as default }

