import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import selectRequests from '../store/selectors/requests';
import { useSelector } from "react-redux";

const RequestsSummary = () => {

    const requests = useSelector(state => state.requests);
    const filters = useSelector(state => state.filters);
    const filteredRequests = selectRequests(requests, filters);

    const [length, setLength] = useState(filteredRequests.length);

    const mybutton = () => {
        console.log(filteredRequests.length);
        console.log(length)
    }

    useEffect(() => {
        console.log("update");

        setLength(filteredRequests.length);

    }, [filteredRequests])

    return (
        <div className="page-header">
            <div className="content-container">
                <span className="page-header__title">
                    Displaying {length} {length === 1 ? (<span>Request</span>) : (<span>Requests</span>)}
                </span>
            </div>
        </div>
    )
}

export { RequestsSummary as default }