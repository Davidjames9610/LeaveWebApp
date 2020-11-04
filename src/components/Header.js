import React, { useState, useEffect } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../store/actions/auth';
import { Nav } from 'react-bootstrap';

const Header = () => {

  const [active, setActive] = useState("/create");
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const onSelect = (key) => {

    if (key === 'logout') {
      dispatch(startLogout());
    } else {
      history.push(key);
    }
  }

  useEffect(() => {
    setActive(location.pathname);
  }, [])

  return (
    <div>
      <div className="content-container">
        <div className="header__content">
          <h1 className="header__title">ExcuseMe</h1>
        </div>
      </div>

      <div className="content-container">
        <Nav variant="pills" activeKey={active} onSelect={onSelect}>
          <Nav.Item>
            <Nav.Link eventKey="/create">Add Request</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/monitor">View Requests</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="logout">Logout</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  )
};

export default Header;

// <div className="navbar-group">
//   <div className="navbar-group__item">
//     <Link to='/create' className="navbar-group__link">
//       Request
//             </Link>
//   </div>
//   <div className="navbar-group__item">
//     <Link to='/monitor' className="navbar-group__link">
//       Monitor
//             </Link>
//   </div>
//   <div className="navbar-group__item">
//     <button className="navbar-group__button" onClick={logout}>Logout</button>
//   </div>
//   <button onClick={clicked}>test</button>
// </div>