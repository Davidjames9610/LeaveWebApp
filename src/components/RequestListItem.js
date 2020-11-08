import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Col, Row } from 'react-bootstrap';

const RequestListItem = ({ firstName, lastName, type, reason, startDate, endDate, duration, id, desktopMode }) => {

  const [days, setDays] = useState('days');

  useEffect(() => {

    if (duration === 1) {
      setDays('day');
    }
  }, [])


  return (
    <div className="list__itemContainer">
      <Link className="list-link" to={`/edit/${id}`}>
        <Row>
          <Col bsPrefix="list__firstCol">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-app" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M11 2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
            </svg>
          </Col>
          <Col>
            <span className="list-item__title">{firstName}</span>
            {desktopMode ? (<span className="list-item__title"> {lastName}</span>) : (null)}
          </Col>
          {desktopMode ? (
            <Col>
              <span className="list-item__title" >{moment(startDate).format('MMM Do YYYY')}</span>
            </Col>
          ) : (null)}
          {desktopMode ? (
            <Col>
              <span className="list-item__title" >{moment(endDate).format('MMM Do YYYY')}</span>
            </Col>
          ) : (null)}
          {desktopMode ? (
            <Col>
              <span className="list-item__title" >{duration} {days}</span>
            </Col>
          ) : (null)}
          <Col>
            <span className="list-item__title" >{type}</span>
          </Col>
          {desktopMode ? (
            <Col bsPrefix="list__lastCol">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </Col>
          ) : (null)}
        </Row>
      </Link>
    </div>
  );
};

export default RequestListItem;
//{duration === 1 ? (<span className="list-item__title"> day</span>) : (<span className="list-item__title"> days</span>)}
