/* eslint-disable jsx-a11y/img-redundant-alt */
// eslint-disable-next-line
import React from "react";
import { useState } from "react";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fname: "",
    lname: "",
    username: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
    console.log(registerData);
  };

  return (
    <div>
      <section className='vh-100'>
        <div className='container-fluid h-custom vh-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-9 col-lg-6 col-xl-5'>
              <img
                src='https://img.freepik.com/free-vector/flat-psychiatrist-elderly-patient-with-alzheimer-diseas-dementia-psychiatric-anxiety-disorder-doctor-help-old-man-with-confusion-head-treatment-mental-problems-loss-memory_88138-768.jpg?w=826'
                className='img-fluid rounded mx-auto d-block mt-1 mb-2'
                alt='Sample image'
              />
            </div>
            <div
              className='col-md-8 col-lg-6 col-xl-4 offset-xl-1 '
              id='Signup'>
              <form onSubmit={handleClick}>
                <p className='text-center h1 fw-bold mx-1 mx-md-3 mt-4 '>
                  Sign up
                </p>
                <div className='divider d-flex align-items-center my-4'></div>
                <div className='d-flex justify-content-between '>
                  <div className='form-outline mb-4 me-2'>
                    <input
                      type='text'
                      id='fname'
                      className='form-control form-control-lg'
                      placeholder='e.g. John'
                      onChange={(e) => {
                        setRegisterData((prevState) => {
                          return { ...prevState, fname: e.target.value };
                        });
                      }}
                    />
                    <label className='form-label' for='fname'>
                      First Name
                    </label>
                  </div>
                  <div className='form-outline mb-4 ms-2 '>
                    <input
                      type='text'
                      id='lname'
                      className='form-control form-control-lg'
                      placeholder='e.g. Wick'
                      onChange={(e) => {
                        setRegisterData((prevState) => {
                          return { ...prevState, lname: e.target.value };
                        });
                      }}
                    />
                    <label className='form-label' for='lname'>
                      Last Name
                    </label>
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='form-outline mb-4 '>
                    <input
                      type='text'
                      id='username'
                      className='form-control form-control-lg'
                      placeholder='e.g. John21'
                      onChange={(e) => {
                        setRegisterData((prevState) => {
                          return { ...prevState, username: e.target.value };
                        });
                      }}
                    />
                    <label className='form-label' for='username'>
                      Username
                    </label>
                  </div>
                  <div
                    className='mb-4 ms-3 d-flex flex-row'
                    onChange={(e) => {
                      setRegisterData((prevState) => {
                          return { ...prevState, gender: e.target.value };
                        });
                    }}>
                    <div
                      className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='inlineRadioOptions'
                        id='gender_checkbox1'
                        value='Male'
                      />
                      <label className='form-check-label' for='male'>
                        Male
                      </label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='inlineRadioOptions'
                        id='gender_checkbox2'
                        value='Female'
                      />
                      <label className='form-check-label' for='female'>
                        Female
                      </label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='inlineRadioOptions'
                        id='gender_checkbox3'
                        value='Other'
                      />
                      <label className='form-check-label' for='other'>
                        Other
                      </label>
                    </div>
                  </div>
                </div>

                <div className='form-outline mb-4 '>
                  <input
                    type='email'
                    id='email'
                    className='form-control form-control-lg'
                    placeholder='e.g. john21@gmail.com'
                    onChange={(e) => {
                      setRegisterData((prevState) => {
                        return { ...prevState, email: e.target.value };
                      });
                    }}
                  />
                  <label className='form-label ' for='email'>
                    Email address
                  </label>
                </div>

                <div className='form-outline mb-3'>
                  <input
                    type='password'
                    id='password'
                    className='form-control form-control-lg'
                    placeholder='*************'
                    autocomplete='true'
                    onChange={(e) => {
                      setRegisterData((prevState) => {
                        return { ...prevState, password: e.target.value };
                      });
                    }}
                  />
                  <label className='form-label' for='password'>
                    Password
                  </label>
                </div>
                <div className='form-outline'>
                  <input
                    type='password'
                    id='confirmpassword'
                    className='form-control form-control-lg'
                    placeholder='*************'
                    autocomplete='true'
                    onChange={(e) => {
                      setRegisterData((prevState) => {
                        return {
                          ...prevState,
                          confirmPassword: e.target.value,
                        };
                      });
                    }}
                  />
                  <label className='form-label' for='password'>
                    Confirm Password
                  </label>
                </div>

                <div className='d-flex justify-content-between align-items-center flex-column'>
                  <div className='text-center text-lg-start mt-4 pt-2'>
                    <button
                      type='Submit'
                      className='btn btn-warning btn-lg'
                      id='registerBtn'
                      // style='padding-left: 2.5rem; padding-right: 2.5rem;'
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className='form-check mb-0'>
                    <label className='form-check-label' for='terms-check'>
                      Already have an account? <a href='/login'>Login</a>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
