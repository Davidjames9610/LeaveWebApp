import React, { useState } from 'react';
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
        .required('Required')
    // reason: Yup.string()
    //     .required('Required')
    //     .min(2, 'Too Short!'),
    // type: Yup.string()
    //     .required('A Type is Required')
});

const RequestFormik = () => {
    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        startDate: false,
        endDate: false,
        reason: false,
        type: false
    });

    const handleBlur = (data) => {
        setTouched({ ...touched, [data.target.id]: true });
    }

    const getState = () => {
        console.log(touched);
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            reason: '',
            type: '',
            startDate: '',
            endDate: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: SignupSchema,
    });
    return (
        <form className="form__container" onSubmit={formik.handleSubmit}>
            <Row>
                <Col>
                    <FormGroup>
                        {(touched.firstName === true) && (formik.errors.firstName != null) ? (<p>{formik.errors.firstName}</p>) : (<p>First Name</p>)}
                        <FormControl
                            id="firstName"
                            //name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={handleBlur}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        {(touched.lastName === true) && (formik.errors.lastName != null) ? (<p>{formik.errors.lastName}</p>) : (<p>Last Name</p>)}
                        <FormControl
                            id="lastName"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={handleBlur}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        {(touched.startDate === true) && (formik.errors.startDate != null) ? (<p>{formik.errors.startDate}</p>) : (<p>Start Date</p>)}
                        <FormControl
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formik.values.startDate}
                            onChange={formik.handleChange}
                            onBlur={handleBlur}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        {(touched.endDate === true) && (formik.errors.endDate != null) ? (<p>{formik.errors.endDate}</p>) : (<p>End Date</p>)}
                        <FormControl
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={formik.values.endDate}
                            onChange={formik.handleChange}
                            onBlur={handleBlur}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        {(touched.reason === true) && (formik.errors.reason != null) ? (<p>{formik.errors.reason}</p>) : (<p>Reason</p>)}
                        <FormControl
                            as="textarea"
                            rows={3}
                            id="reason"
                            name="reason"
                            value={formik.values.reason}
                            onChange={formik.handleChange}
                            onBlur={handleBlur}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        {(touched.type === true) && (formik.errors.type != null) ? (<p>{formik.errors.type}</p>) : (<p>Type</p>)}
                        <FormControl
                            as="select"
                            id="type"
                            name="type"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                            onBlur={handleBlur}
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
            <button onClick={getState}>touched</button>
        </form>
    );
};

export { RequestFormik as default }



