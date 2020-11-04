import React from 'react';
import { Link } from 'react-router-dom';

const RequestsSummary = () => {
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Monitor Requests</h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Request</Link>
                </div>
            </div>
        </div>
    )
}

export { RequestsSummary as default }