import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RequestForm from './RequestForm';
import { startEditRequest, startRemoveRequest } from '../store/actions/requests';

const EditRequestPage = (props) => {
  const requests = useSelector(state => state.requests);
  const request = requests.find((request) => request.id === props.match.params.id);

  const dispatch = useDispatch();

  return (
    <div>
      <RequestForm
        request={request}
        onSubmit={(newrequest) => {
          dispatch(startEditRequest(request.id, newrequest));  //async 
          props.history.push('/monitor');
        }}
      />
      <button onClick={() => {
        dispatch(startRemoveRequest({ id: request.id }));
        props.history.push('/monitor');
      }}>Remove</button>
    </div>
  );
};

export { EditRequestPage as default };
