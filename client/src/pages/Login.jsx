import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [valid, setValid] = useState({
    email: false,
    password: false,
  })

  const [isTouched, setIsTouched] = useState({
    email: false,
    password: false,
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (validateEmail(loginData.email)) {
      setValid((prevState) => {
        return { ...prevState, email: true };
      })
    } else {
      setValid((prevState) => {
        return { ...prevState, email: false };
      })
    }
    if (validatePassword(loginData.password)) {
      setValid((prevState) => {
        return { ...prevState, password: true };
      })
    } else {
      setValid((prevState) => {
        return { ...prevState, password: false };
      })
    }
  }, [loginData])

  function validateEmail(email) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
  }

  function validatePassword(password) {
      if ((password).length >= 8) {
          return true;
      }
      return false;
  }

  const handleClick = async (event) => {
    event.preventDefault();
    if (valid.email && valid.password) {
      console.log(loginData)
      const res = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
      const data = await res.json();
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data.user))
      navigate('/')
    }
  };

  return (
    <div>
      <section className='vh-100'>
        <div className='container-fluid h-custom h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-9 col-lg-6 col-xl-5'>
              <img
                src='https://img.freepik.com/free-vector/flat-psychiatrist-elderly-patient-with-alzheimer-diseas-dementia-psychiatric-anxiety-disorder-doctor-help-old-man-with-confusion-head-treatment-mental-problems-loss-memory_88138-768.jpg?w=826'
                className='img-fluid rounded mx-auto d-block mt-1 mb-2'
                alt='sample'
              />
            </div>
            <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1' id='Signin'>
              <form onSubmit={handleClick}>
                <div className='d-flex flex-row align-items-center justify-content-center justify-content-lg-start '>
                  <p className='lead fw-normal mb-0 me-3 my-0'>Sign in with</p>
                  <button
                    type='button'
                    className='btn f btn-labeled btn-warning mx-1'>
                    <i className='fa fa-facebook'></i>
                  </button>

                  <button
                    type='button'
                    className='btn t btn-labeled btn-warning mx-1'>
                    <i className='fa fa-twitter'></i>
                  </button>

                  <button
                    type='button'
                    className='btn l btn-labeled btn-warning mx-1'>
                    <i className='fa fa-linkedin'></i>
                  </button>
                </div>
                <div className='divider d-flex align-items-center my-4'>
                  <p className='text-center fw-bold mx-3 mb-0'>Or</p>
                </div>
                <div className='form-outline mb-4 '>
                  <input
                    type='email'
                    id='login-email'
                    className={`form-control form-control-lg ${!valid.email && isTouched.email ? 'is-invalid' : ''}`}
                    placeholder='Enter a valid email address'
                    onChange={(e) => {
                      setLoginData((prevState) => {
                        return { ...prevState, email: e.target.value };
                      });
                    }}
                    onBlur={()=> {
                      setIsTouched((prevState) => {
                        return { ...prevState, email: true };
                      })
                    }}
                  />
                  <label className='form-label' htmlFor='email'>
                    Email address
                  </label>
                </div>
                <div className='form-outline mb-3'>
                  <input
                    type='password'
                    id='login-password'
                    className={`form-control form-control-lg ${!valid.password && isTouched.password ? 'is-invalid' : ''}`}
                    placeholder='Enter password'
                    autoComplete='true'
                    onChange={(e) => {
                      setLoginData((prevState) => {
                        return { ...prevState, password: e.target.value };
                      });
                    }}
                    onBlur={()=> {
                      setIsTouched((prevState) => {
                        return { ...prevState, password: true };
                      })
                    }}
                  />
                  <label className='form-label' htmlFor='password'>
                    Password
                  </label>
                </div>

                <div className='d-flex justify-content-between align-items-center'>
                  <div className='form-check mb-0'>
                    <input
                      className='form-check-input me-2'
                      type='checkbox'
                      value=''
                      id='remember-me-checkbox'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='remember-me-checkbox'>
                      Remember me
                    </label>
                  </div>
                  <a href='/forgotPassword.html' className='text-body'>
                    Forgot password?
                  </a>
                </div>
                <div className='d-flex align-items-center flex-column text-lg-start mt-4 pt-2'>
                  <button
                    type='submit'
                    id='login-btn'
                    className='btn btn-warning btn-lg'
                    value='Submit'
                    style={{}}>
                    Login
                  </button>
                  <p className='small fw-bold mt-2 pt-1 mb-4 mt-3 '>
                    Don't have an account?{" "}
                    <a href='/Register' className='link-danger'>
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
