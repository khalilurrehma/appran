"use client";

import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const SearchForm = () => {
  return (
    <div className="col-xl-8 col-md-12 col-12">
     
      <Form className="bg-white p-1 rounded-pill mt-2 dnonecusto">
        <Row className="d-flex justify-content-center">
          <Col className="m-0">
            <Form.Control
              size="lg"
              id="inlineFormInputMobile"
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
    </div>
  );
}

export default SearchForm;
