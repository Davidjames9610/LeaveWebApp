import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../store/actions/auth';

const Header = () => {

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(startLogout());
  };

  return (
    <div>
      <div className="content-container">
        <div className="header__content">
          <h1 className="header__title">ExcuseMe</h1>
        </div>
      </div>

      <div className="content-container">
        <div className="navbar-group">
          <div className="navbar-group__item">
            <Link to='/create' className="navbar-group__link">
              Request
            </Link>
          </div>
          <div className="navbar-group__item">
            <Link to='/monitor' className="navbar-group__link">
              Monitor
            </Link>
          </div>
          <div className="navbar-group__item">
            <button className="navbar-group__button" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;

// <div className="content-container">
//   <Link to='/create'>
//     <h1 >Add Request</h1>
//   </Link>
//   <Link to='/monitor'>
//     <h1 >View Requests</h1>
//   </Link>
//   <div>
//     <button onClick={logout}>Logout</button>
//   </div>
// </div>