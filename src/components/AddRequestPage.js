import React from 'react';
import { useDispatch } from "react-redux";
import { startAddRequest } from '../store/actions/requests';
import RequestForm from './RequestForm';

const AddRequestPage = (props) => {

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Add Request</h3>
      <RequestForm
        onSubmit={(request) => {
          dispatch(startAddRequest(request));  //async 
          props.history.push('/monitor');
        }}
      />
    </div>
  )
}

export default AddRequestPage;
