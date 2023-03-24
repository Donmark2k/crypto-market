import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../App.css';
import {
  Nav, Navbar, Container, Offcanvas,
} from 'react-bootstrap';
import { BsGear, BsMic, BsArrowLeftShort } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { searchField } from '../redux/cryptos/cryptoSlice';
import logo from '../asset/planet.png';

function NavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const location = useLocation();
  const dispatch = useDispatch();
  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasToggle = () => setShowOffcanvas((prev) => !prev);
  const searchHandler = (e) => {
    setSearchValue(e.target.value);

    dispatch(searchField(e.target.value));
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
          {location.pathname !== '/' && (
            <Link
              to="/"
              className="navbar-brand"
              style={{ color: '#0290FF', paddingLeft: '12px' }}
              onClick={() => {
                setSearchValue('');
                dispatch(searchField(''));
              }}
            >
              <span className="profile">
                <BsArrowLeftShort
                  style={{
                    color: '#0290FF',
                    height: '30px',
                    width: '30px',
                    cursor: 'pointer',
                    transition: 'all ease-in 300ms',
                    paddingRight: '0',
                    marginRight: '0',
                  }}
                />
              </span>
            </Link>
          )}
          <Navbar.Brand
            href="#"
            style={{ color: '#0290FF', paddingLeft: '1%', fontSize: '10px' }}
          >
            <img
              alt="planet log"
              src={logo}
              width={55}
              height={45}
              style={{ paddingRight: '2px' }}
            />
            {' '}
            CRYPTO-STAT
          </Navbar.Brand>
          {location.pathname === '/' && (
            <div className="">
              <input
                type="text"
                placeholder="search ..."
                className="form-control me-1"
                style={{ width: '120px' }}
                value={searchValue}
                onChange={searchHandler}
              />
            </div>
          )}

          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={handleOffcanvasToggle}
            style={{backgroundColor: '#0290FF'}}
          />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={handleOffcanvasClose}
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                crypto-stat
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-5" style ={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
>
                <NavLink
                  className="nav-link"
                  to="/"
                  as={Link}
                  onClick={handleOffcanvasClose}
                >
                  <span className="">
                    <BsMic
                      style={{
                        color: '#0290FF',
                        height: '30px',
                        width: '30px',
                        cursor: 'pointer',
                        transition: 'all ease-in 300ms',
                      }}
                    />
                  </span>
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/"
                  as={Link}
                  onClick={handleOffcanvasClose}
                >
                  <span className="profile">
                    <BsGear
                      style={{
                        color: '#0290FF',
                        width: '30px',
                        height: '30px',
                        cursor: 'pointer',
                        transition: 'all ease-in 300ms',
                      }}
                    />
                  </span>
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
