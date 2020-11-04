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
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <h1 className="header__title">Excuse Me</h1>
          <Link to='/create'>
            <h1 className="header__title">Add Request</h1>
          </Link>
          <Link to='/monitor'>
            <h1 className="header__title">View Requests</h1>
          </Link>
          <div>
            <button className="header__button" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
