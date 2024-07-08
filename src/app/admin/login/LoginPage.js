import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <div className='col-lg-6 col-12'>
          <div className='loginCont'>
            <h4 className='textGradient fs-2 fw-bold text-center mb-3'>Login</h4>
            <Form>
              <Form.Group className="mb-4" controlId="formGroupEmail">
                <Form.Label className='text-white fw-bold fs-6'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className='costField' />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formGroupPassword">
                <Form.Label className='text-white fw-bold fs-6'>Password</Form.Label>
                <div className="input-group">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className='costField'
                  />
                  <button
                    className="btn btn-outline-secondary border-0 rounded-0 passEye"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </Form.Group>

              <div className="d-grid gap-2 mt-2">
                <button type="submit" className='btnStyles py-3 rounded-0'> 
                  Login 
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
