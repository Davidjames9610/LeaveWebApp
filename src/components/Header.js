import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../store/actions/auth';

const Header = () => {

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(startLogout());
  };

  return (
    <header>
      <h1>Leave Management Assistant</h1>
      <Link to="/create">Request</Link>
      <Link to='/monitor'> Monitor</Link>
      <button onClick={logout}>Logout</button>
    </header>
  )
};

export default Header;
