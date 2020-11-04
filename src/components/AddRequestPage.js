import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import { startAddRequest } from '../store/actions/requests';
import RequestForm from './RequestForm';

const AddRequestPage = (props) => {
  const history = useHistory();

  // useEffect(() => {
  //   console.log("props: ", props.history);
  // }, []);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Please add your Request below</h1>
        </div>
      </div>
      <div className="content-container">
        <RequestForm
          onSubmit={(request) => {
            dispatch(startAddRequest(request));  //async 
            history.push('/monitor');
          }}
        />
      </div>
    </div>
  )
}

export default AddRequestPage;
