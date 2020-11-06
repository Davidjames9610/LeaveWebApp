import React, { useState, useEffect } from 'react';
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
        .required('Please add your first name'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please add your last name'),
    reason: Yup.string()
        .required('Required'),
    type: Yup.string()
        .required('Please select')
});

const RequestFormik = (props) => {

    const [myDates, setDates] = useState({
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
    });

    const [duration, setDuration] = useState(1);

    const handleDateBlur = (change) => {
        //console.log(change.target)
        setDates({ ...myDates, [change.target.id]: change.target.value });
    };

    useEffect(() => {
        console.log("dates updated");
        //calculate duration

        const time = (moment(myDates.endDate).diff(moment(myDates.startDate), 'days') + 1);
        //console.log(time);
        if (time > 0) {
            setDuration(time);
        };
    }, [myDates])

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            reason: '',
            type: '',
            startDate: moment().format('YYYY-MM-DD'),
            endDate: moment().format('YYYY-MM-DD')
        },
        onSubmit: values => {

            // console.log("submit!");
            // //alert(JSON.stringify(values, null, 2));

            props.onSubmit({
                firstName: values.firstName,
                lastName: values.lastName,
                type: values.type,
                reason: values.reason,
                startDate: moment(values.startDate).valueOf(),
                endDate: moment(values.endDate).valueOf(),
                duration: duration
            });
        },
        validationSchema: SignupSchema,
    });
    return (
        <form className="form__container" onSubmit={formik.handleSubmit}>
            <Row>
                <Col>
                    <FormGroup>
                        {formik.errors.firstName ? (<FormLabel>{formik.errors.firstName}</FormLabel>) : (<FormLabel>First Name</FormLabel>)}
                        <FormControl
                            plaintext
                            id="firstName"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            className="form__textInput"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        {formik.errors.lastName ? (<FormLabel>{formik.errors.lastName}</FormLabel>) : (<FormLabel>Last Name</FormLabel>)}
                        <FormControl
                            plaintext
                            id="lastName"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            className="form__textInput"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        {formik.errors.startDate ? (<FormLabel>{formik.errors.startDate}</FormLabel>) : (<FormLabel>Start Date</FormLabel>)}
                        <FormControl
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formik.values.startDate}
                            onChange={formik.handleChange}
                            onBlur={handleDateBlur}
                            className="form__textInput"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        {formik.errors.endDate ? (<FormLabel>{formik.errors.endDate}</FormLabel>) : (<FormLabel>End Date</FormLabel>)}
                        <FormControl
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={formik.values.endDate}
                            onChange={formik.handleChange}
                            onBlur={handleDateBlur}
                            className="form__textInput"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        {formik.errors.reason ? (<FormLabel>{formik.errors.reason}</FormLabel>) : (<FormLabel cla>Reason</FormLabel>)}
                        <FormControl
                            plaintext
                            as="textarea"
                            rows={3}
                            id="reason"
                            name="reason"
                            value={formik.values.reason}
                            onChange={formik.handleChange}
                            className="form__textArea"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        {formik.errors.type ? (<FormLabel>{formik.errors.type}</FormLabel>) : (<FormLabel>What Type of Leave?</FormLabel>)}
                        <FormControl
                            plaintext
                            as="select"
                            id="type"
                            name="type"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                            className="form__select"
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
            <div className="form__duration">
                <span>You have requested {duration}</span>
                {duration === 1 ? (<span> day</span>) : (<span> days</span>)}
                <span> of leave</span>
            </div>
            <button className="form__submit" type="submit">SUBMIT REQUEST</button>
        </form>
    );
};

export { RequestFormik as default }





