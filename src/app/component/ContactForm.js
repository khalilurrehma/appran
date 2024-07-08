"use client";
import React, { useState } from 'react';
import {Col, Form, Row} from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('your_api_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form data sent successfully');
        // Optionally, you can reset the form fields after successful submission
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <div className="contactBg">
      <h4 className="textGradient fs-2 fw-bold text-center mb-3">
        Get Free App Promotion Now - Limited Time Offer
      </h4>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Form.Control
              size="lg"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="costField mb-3"
              required
            />
          </Col>
          <Col xs={12}>
            <Form.Control
              size="lg"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="costField mb-3"
              required
            />
          </Col>
          <Col xs={12} className="mb-xs-3">
            <Form.Control
              size="lg"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="costField"
              required
            />
          </Col>

          <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="costField"
              required
            />
          </Form.Group>

          <div className="d-grid gap-2 mt-2">
            <button type="submit" className="btnStyles py-3 rounded-0">
              Submit
            </button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default ContactForm;
