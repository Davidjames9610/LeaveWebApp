import React from 'react';
import { useDispatch } from "react-redux";
import { startAddRequest } from '../store/actions/requests';
import RequestForm from './RequestForm';

const AddRequestPage = (props) => {

  const dispatch = useDispatch();

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Please add your Request bellow</h1>
        </div>
      </div>
      <div className="content-container">
        <RequestForm
          onSubmit={(request) => {
            dispatch(startAddRequest(request));  //async 
            props.history.push('/monitor');
          }}
        />
      </div>
    </div>
  )
}

export default AddRequestPage;
