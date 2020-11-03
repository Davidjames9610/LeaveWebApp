import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker, DateRangePicker, DateRangePickerInput } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const RequestForm = (props) => {

    const [state, setState] = useState({
        // description: props.request ? props.request.description : "",
        // note: props.request ? props.request.note : "",
        // amount: props.request ? (props.request.amount / 100).toString() : "",
        // createdAt: props.request ? moment(props.request.createdAt) : moment(),
        // calendarFocused: false,
        // error: ''
        firstName: props.request ? props.request.firstName : "",
        lastName: props.request ? props.request.lastName : "",
        //duration: props.request ? moment(props.request.duration) : moment(),
        reason: props.request ? props.request.reason : "",
        calendarFocused: false,
        error: ''
    });

    const [myType, setType] = useState(props.request ? props.request.type : "sick");

    const [range, setRange] = useState({
        startDate: moment(),
        endDate: moment(),
    });

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
            });
        }
    };

    const onTypeChange = (e) => {
        setType(e.target.value);
        console.log(e.target.value);
    }


    return (
        <div>
            {state.error && <p>{state.error}</p>}
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="firstName"
                    autoFocus
                    name="firstName"
                    value={state.firstName}
                    onChange={onChange}
                />
                <input
                    type="text"
                    placeholder="lastName"
                    autoFocus
                    name="lastName"
                    value={state.lastName}
                    onChange={onChange}
                />
                <select
                    value={myType}
                    onChange={onTypeChange}
                >
                    <option value="sick">Sick</option>
                    <option value="casual">Casual</option>
                    <option value="maternity">Maternity</option>
                    <option value="paternity">Paternity</option>
                    <option value="bereavement">Bereavement</option>
                    <option value="compensatory">Compensatory</option>
                    <option value="sabbatical">Sabbatical</option>
                    <option value="unpaid">Unpaid</option>

                </select>
                <textarea
                    placeholder="Add a note for your request (optional)"
                    value={state.reason}
                    name="reason"
                    onChange={onChange}
                >
                </textarea>
                <DateRangePicker
                    startDate={range.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={range.endDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={({ startDate, endDate }) => setRange({ startDate, endDate })}
                    focusedInput={focusedInput}
                    onFocusChange={onFocusChangeRangeHandler}
                />
                <button>Add Request</button>
            </form>
            <p>firstname: {state.firstName}</p>
            <p>lastname: {state.lastName}</p>
            <p>note: {state.reason}</p>
            <p>type: {myType}</p>
            <p>start date: {moment(range.startDate).format('MMMM Do, YYYY')}</p>
            <p>end date: {moment(range.endDate).format('MMMM Do, YYYY')}</p>
            <p>duration: {moment(range.endDate).diff(moment(range.startDate), 'days') + 1}</p>
        </div>
    )
}

export { RequestForm as default } 
