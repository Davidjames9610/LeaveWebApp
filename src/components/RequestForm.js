import React, { useState } from 'react';
import moment from 'moment';

import { Row, Col, Form } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';

import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const RequestForm = (props) => {

    const [state, setState] = useState({
        firstName: props.request ? props.request.firstName : "",
        lastName: props.request ? props.request.lastName : "",
        reason: props.request ? props.request.reason : "",
        calendarFocused: false,
        error: ''
    });

    const [myType, setType] = useState(props.request ? props.request.type : "");

    const [range, setRange] = useState({
        startDate: moment(),
        endDate: moment(),
    });

    const [duration, setDuration] = useState(props.duration ? props.request.duration : 1);

    //range date picker handler functions
    const [focusedInput, setFocusedInput] = useState(null);
    const onFocusChangeRangeHandler = (focusedInput) => {
        setFocusedInput(focusedInput);
    }

    //main manager of state
    const onChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!state.firstName) {
            setState({ ...state, 'error': 'Please provide the correct information' });
        } else {
            console.log("submit request!");
            setState({ ...state, 'error': '' });
            props.onSubmit({
                firstName: state.firstName,
                lastName: state.lastName,
                type: myType,
                reason: state.reason,
                startDate: range.startDate.valueOf(),
                endDate: range.endDate.valueOf(),
                duration: duration
            });
        }
    };

    const onTypeChange = (e) => {
        setType(e.target.value);
        console.log(e.target.value);
    }

    const onDatesChange = ({ startDate, endDate }) => {

        setRange({ startDate, endDate })
        const time = (moment(endDate).diff(moment(startDate), 'days') + 1)
        if (time) {
            console.log(time);
            setDuration(time);
        }
    }
    
    return (
        <div>
               <form className="form" onSubmit={onSubmit}>
                {state.error ? (<p className="form__error">Name error</p>) : (<p className="form__subtitle">First Name</p>)}
                <input
                    type="text"
                    //placeholder="First Name"
                    className="form__text-input"
                    name="firstName"
                    value={state.firstName}
                    onChange={onChange}
                />
                <p className="form__subtitle">Last Name</p>
                <input
                    type="text"
                    //placeholder="Last Name"
                    autoFocus
                    className="form__text-input"
                    name="lastName"
                    value={state.lastName}
                    onChange={onChange}
                />
                <p className="form__subtitle">Select type</p>
                <select
                    value={myType}
                    className="form__select"
                    onChange={onTypeChange}
                >
                    <option value="" selected disabled hidden>Select...</option>
                    <option value="Sick">Sick</option>
                    <option value="Casual">Casual</option>
                    <option value="Maternity">Maternity</option>
                    <option value="Paternity">Paternity</option>
                    <option value="Bereavement">Bereavement</option>
                    <option value="Compensatory">Compensatory</option>
                    <option value="Sabbatical">Sabbatical</option>
                    <option value="Unpaid">Unpaid</option>
                </select>
                <p className="form__subtitle">Reason</p>
                <textarea
                    value={state.reason}
                    name="reason"
                    className="form__textarea"
                    onChange={onChange}
                >
                </textarea>
                <p className="form__subtitle">Please select dates</p>
                <DateRangePicker
                    startDate={range.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={range.endDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={onDatesChange}
                    focusedInput={focusedInput}
                    onFocusChange={onFocusChangeRangeHandler}
                    
                />
                <div className="form__duration">
                       <span>You have requested {duration}</span>
                    {duration === 1 ? (<span> day</span>) : (<span> days</span>)}
                    <span> of leave</span>
                </div>
                <div>
                    <button className="button">Save Request</button>
                </div>
            </form>
        </div>
    );
}

export { RequestForm as default }

