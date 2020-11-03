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
          <Link className="header__title" to='/monitor'>
            <h1>Leave Manager</h1>
          </Link>
          <button className="button button--link" onClick={logout}>Logout</button>
        </div>
      </div>
    </header>
  )
};

export default Header;
