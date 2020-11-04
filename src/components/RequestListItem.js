import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const RequestListItem = ({ firstName, lastName, type, reason, startDate, endDate, duration, id }) => (

  <div className="list-item">
    <Link to={`/edit/${id}`}>
      <div className="row">
        <div className="col-sm">
          <span className="list-item__title">{firstName} {lastName}</span>
        </div>
        <div className="col-sm">
          <span className="list-item__title" >{moment(startDate).format('MMM Do, YYYY')}</span>
        </div>
        <div className="col-sm">
          <span className="list-item__title" >{moment(endDate).format('MMM Do, YYYY')}</span>
        </div>
        <div className="col-sm">
          <span className="list-item__title" >{duration}</span>
          {duration === 1 ? (<span> day</span>) : (<span> days</span>)}
        </div>
        <div className="col-sm">
          <span className="list-item__title" >{type}</span>
        </div>
      </div>
    </Link>
  </div>
);

export default RequestListItem;
