import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RequestFormik from './RequestFormik';
import { startEditRequest } from '../store/actions/requests';

const EditRequestPage = (props) => {
  const requests = useSelector(state => state.requests);
  const request = requests.find((request) => request.id === props.match.params.id);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Leave Request</h1>
        </div>
      </div>
      <div className="content-container">
        <RequestFormik
          request={request}
          onSubmit={(newrequest) => {
            dispatch(startEditRequest(request.id, newrequest));  //async 
            props.history.push('/monitor');
          }}
          edit={true}
        />
      </div>
    </div>
  );
};

export { EditRequestPage as default };
