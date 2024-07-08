"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Form, Offcanvas, Button, Col, Row } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const expand = React.useMemo(() => 'lg', []);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showNav) {
      setShowNav(false);
    }
  };

  return (
    <div className='bgDark'> 
      <div className='container'> 
        <Navbar expand="lg" className="mb-3">
          <Container fluid>
            <Link href="/" className='main-logo' passHref>
              <Navbar.Brand className='text-white fs-2 fw-bold'>appran.</Navbar.Brand>
            </Link>
            <Button variant="link" className="text-white ms-auto d-lg-none" onClick={toggleSearch}>
              <FaSearch />
            </Button>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={toggleNav} /> 
            <Navbar.Collapse id={`offcanvasNavbar-expand-${expand}`} className={`${showNav ? 'show' : ''}`}>
              <Nav className="mx-auto">
                <Nav.Link href="https://appran.com/#header-section" target='_blank' className='costStyle'>Home</Nav.Link>
                <Nav.Link href="https://appran.com/#buy-section" target='_blank' className='costStyle'>App Installs</Nav.Link>
                <Nav.Link href="https://appran.com/#services-section" target='_blank' className='costStyle'>Services</Nav.Link>
                <Nav.Link href="https://appran.com/#future-section" target='_blank' className='costStyle'>App Optimization</Nav.Link>
                <Nav.Link href="https://appran.com/#faq-section" target='_blank' className='costStyle'>FAQs</Nav.Link>
                <Nav.Link href="https://appran.com/#testimonials-section" target='_blank' className='costStyle'>Testimonials</Nav.Link>
                <Nav.Link href="https://appran.com/#contact-section" target='_blank' className='costStyle'>Contact</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Link href="https://dashboard.appran.com/signup" passHref>
                  <button className='bgColors fs-6 fw-bold rounded-pill px-5 py-3 border-0 text-white text-decoration-none'>
                    Get Started
                  </button>
                </Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Offcanvas
          show={showSearch}
          onHide={() => setShowSearch(false)}
          placement="top"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='textGradient fs-2 fw-bold'>
              Search
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className='bg-white p-1 rounded-pill mt-2'>
              <Row className="d-flex justify-content-center">
                <Col className="m-0">
                  <Form.Control
                    size="lg"
                    id="inlineFormInput"
                    placeholder="Search appran Glossary"
                    className='costForm fs-6 rounded-pill border-0'
                  />
                </Col>
                <Col className="m-0" xs="auto">
                  <Button
                    className='bgColors fs-6 fw-bold rounded-pill px-5 py-3 border-0'
                    variant="primary"
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default NavBar;
