import React, { useState } from 'react';
import moment from 'moment';
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

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
                {state.error && <p className="form__error">{state.error}</p>}
                <input
                    type="text"
                    placeholder="First Name"
                    autoFocus
                    className="text-input"
                    name="firstName"
                    value={state.firstName}
                    onChange={onChange}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    autoFocus
                    className="text-input"
                    name="lastName"
                    value={state.lastName}
                    onChange={onChange}
                />
                <select
                    value={myType}
                    className="select"
                    onChange={onTypeChange}
                >
                    <option value="" selected disabled hidden>Select Request type</option>
                    <option value="Sick">Sick</option>
                    <option value="Casual">Casual</option>
                    <option value="Maternity">Maternity</option>
                    <option value="Paternity">Paternity</option>
                    <option value="Bereavement">Bereavement</option>
                    <option value="Compensatory">Compensatory</option>
                    <option value="Sabbatical">Sabbatical</option>
                    <option value="Unpaid">Unpaid</option>

                </select>
                <textarea
                    placeholder="Please add a note for your Request"
                    value={state.reason}
                    name="reason"
                    className="textarea"
                    onChange={onChange}
                >
                </textarea>
                <DateRangePicker
                    startDate={range.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={range.endDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={onDatesChange}
                    focusedInput={focusedInput}
                    onFocusChange={onFocusChangeRangeHandler}
                />
                <div className="duration">
                    <span>You have requested {duration}</span>
                    {duration === 1 ? (<span> day</span>) : (<span> days</span>)}
                    <span> of leave</span>
                </div>
                <div>
                    <button className="button">Save Request</button>
                </div>
            </form>
        </div>
    )
}

export { RequestForm as default }


            // <p>firstname: {state.firstName}</p>
            // <p>lastname: {state.lastName}</p>
            // <p>note: {state.reason}</p>
            // <p>type: {myType}</p>
            // <p>start date: {moment(range.startDate).format('MMMM Do, YYYY')}</p>
            // <p>end date: {moment(range.endDate).format('MMMM Do, YYYY')}</p>
