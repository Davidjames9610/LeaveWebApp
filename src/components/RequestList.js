import React from 'react';
import RequestListItem from './RequestListItem';
import selectRequests from '../store/selectors/requests';
import { useSelector } from "react-redux";
//import { addRequest } from '../store/actions/requests';

const RequestList = () => {
  const requests = useSelector(state => state.requests);
  const filters = useSelector(state => state.filters);


  const filteredRequests = selectRequests(requests, filters);
  console.log(filteredRequests);
  // return (
  //   <div className="content-container">
  //     <div className="list-header">
  //       <div className="show-for-mobile">Request</div>
  //       <div className="show-for-desktop">Request</div>
  //       <div className="show-for-desktop">Start</div>
  //       <div className="show-for-desktop">End</div>
  //       <div className="show-for-desktop">Duration</div>
  //       <div className="show-for-desktop">Type</div>
  //     </div>
  //     {
  //       requests.length === 0 ? (
  //         <div className="list-item list-item--message">
  //           <span>No requests</span>
  //         </div>
  //       ) : (
  //           requests.map((request) => {
  //             return <RequestListItem key={request.id} {...request} />;
  //           })
  //         )
  //     }
  //   </div>
  // );

  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Request</div>
        <div className="show-for-desktop">
          <div className="row">
            <div className="col-sm">
              Request
            </div>
            <div className="col-sm">
              Start
            </div>
            <div className="col-sm">
              End
            </div>
            <div className="col-sm">
              Duration
            </div>
            <div className="col-sm">
              Type
            </div>
          </div>
        </div>
      </div>
      {
        filteredRequests.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No requests</span>
          </div>
        ) : (
            filteredRequests.map((request) => {
              return <RequestListItem key={request.id} {...request} />;
            })
          )
      }
    </div>
  );
};


export { RequestList as default };
