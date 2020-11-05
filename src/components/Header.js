import React, { useState, useEffect } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../store/actions/auth';
import { Nav } from 'react-bootstrap';

const Header = () => {

  const [active, setActive] = useState("/create");

  const [addStyle, setAddStyle] = useState();
  const [viewStyle, setViewStyle] = useState();

  const activeButton = {
    color: '#202124',
    background: '#EBEDED'
  }

  const normalButton = {
    color: 'black',
    background: 'white'
  }

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

    if (location.pathname === '/create') {
      setAddStyle(activeButton);
      setViewStyle(normalButton);
    }
    else if (location.pathname === '/monitor') {
      setAddStyle(normalButton);
      setViewStyle(activeButton);
    }
  }, [])

  return (
    <div>
      <div className="content-container">
        <div className="header__content">
          <h1 className="header__title">ExcuseMe</h1>
        </div>
      </div>

      <div className="content-container">
        <div className="header__nav">
          <Nav variant="pills" activeKey={active} onSelect={onSelect}>
            <Nav.Item>
              <Nav.Link style={addStyle} eventKey="/create">Add</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={viewStyle} eventKey="/monitor">View</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="logout">Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
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