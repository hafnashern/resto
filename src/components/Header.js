import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
            <Navbar className="bg-white">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>
            <img
              alt=""
              src="https://i.postimg.cc/CKkMFNzg/158489064-burger-simple-line-icon-hamburger-icon-isolated-on-white-background-design-for-restaurant.png"
              width="50"
              height="35"
              className="d-inline-block align-top"
              />
              </Link>
            <b className='text-dark ms-1 fs-4 ms-1 mt-4'>RE<span className='text-danger'>S</span>TO</b>

          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header