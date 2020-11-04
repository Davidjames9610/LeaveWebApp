import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const RequestListItem = ({ firstName, lastName, type, reason, startDate, endDate, id }) => (
  <div>
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3 className="list-item__title">{firstName} {lastName}</h3>
        <span className="list-item__sub-title" >from {moment(startDate).format('D/M/YYYY')}</span>
        <span className="list-item__sub-title" > to {moment(endDate).format('D/M/YYYY')}</span>
        <span className="list-item__sub-title" > ({moment(endDate).diff(moment(startDate), 'days') + 1})</span>
      </div>
      <h3 className="list-item__data">{type}</h3>
    </Link>
  </div>
);

export default RequestListItem;

    // <p>type: {type}</p>
    // <p>note: {reason}</p>

    // <p>
    // end: {moment(endDate).format('MMMM Do, YYYY')}
    // </p>
    // <p>Duration: {moment(endDate).diff(moment(startDate), 'days') + 1}</p>