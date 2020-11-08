import React from 'react';
import RequestListItem from './RequestListItem';
import selectRequests from '../store/selectors/requests';
import { useSelector } from "react-redux";
//import { addRequest } from '../store/actions/requests';
import { Row, Col } from 'react-bootstrap';


const RequestList = () => {
  const requests = useSelector(state => state.requests);
  const filters = useSelector(state => state.filters);


  const filteredRequests = selectRequests(requests, filters);

  return (
    <div>
      <div className="show-for-mobile">
        <div className="list-container">
          <Row>
            <Col bsPrefix="list__firstCol">
              <p className="list__heading"></p>
            </Col>
            <Col>
              <p className="list__heading">REQUEST</p>
            </Col>
            <Col >
              <p className="list__heading">TYPE</p>
            </Col>
          </Row>
        </div>
        {
          filteredRequests.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No requests</span>
            </div>
          ) : (
              filteredRequests.map((request) => {
                return <RequestListItem key={request.id} {...request} desktopMode={false} />;
              })
            )
        }
      </div>
      <div className="show-for-desktop">
        <div className="list-container">
          <Row>
            <Col bsPrefix="list__firstCol">
              <p className="list__heading"></p>
            </Col>
            <Col>
              <p className="list__heading">REQUEST</p>
            </Col>
            <Col>
              <p className="list__heading">START DATE</p>
            </Col>
            <Col >
              <p className="list__heading">END DATE</p>
            </Col>
            <Col >
              <p className="list__heading">DURATION</p>
            </Col>
            <Col >
              <p className="list__heading">TYPE</p>
            </Col>
            <Col bsPrefix="list__lastCol">
              <p className="list__heading"></p>
            </Col>
          </Row>
        </div>
        {
          filteredRequests.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No requests</span>
            </div>
          ) : (
              filteredRequests.map((request) => {
                return <RequestListItem key={request.id} {...request} desktopMode={true} />;
              })
            )
        }
      </div>
    </div>
  );
};

//

export { RequestList as default };
