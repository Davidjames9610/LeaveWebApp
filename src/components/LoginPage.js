import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../store/actions/auth';

//import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap';

//import 'bootstrap/dist/css/bootstrap.min.css';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Leave Management Assistent</h1>
      <p>Create and monitor leave requests</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
