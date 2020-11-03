import React from 'react';
import RequestListItem from './RequestListItem';
import selectRequests from '../store/selectors/requests';
import { useSelector } from "react-redux";
//import { addRequest } from '../store/actions/requests';

const RequestList = () => {
  const requests = useSelector(state => state.requests);
  //const filters = useSelector(state => state.filters);
  //const filteredRequests = selectRequests(requests, filters);

  return (
    <div>
      <h1>Request List</h1>
      {requests.map((request) => {
        return <RequestListItem key={request.id} {...request} />;
      })}
    </div>
  );
};


// const mapStateToProps = (state) => {
//   return {
//     requests: selectRequests(state.requests, state.filters)
//   };
// };

export { RequestList as default };
