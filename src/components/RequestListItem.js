import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const RequestListItem = ({ firstName, lastName, type, reason, startDate, endDate, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{firstName} {lastName}</h3>
    </Link>
    <p>type: {type}</p>
    <p>note: {reason}</p>
    <p>
      start: {moment(startDate).format('MMMM Do, YYYY')}
    </p>
    <p>
      end: {moment(endDate).format('MMMM Do, YYYY')}
    </p>
    <p>Duration: {moment(endDate).diff(moment(startDate), 'days') + 1}</p>
  </div>
);

export default RequestListItem;