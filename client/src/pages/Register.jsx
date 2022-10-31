import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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

  const [valid, setValid] = useState({
    fname: false,
    lname: false,
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  })

  const [isTouched, setIsTouched] = useState({
    fname: false,
    lname: false,
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  })

  const navigate = useNavigate()


  useEffect(() => {
    if (validateEmail(registerData.email)) {
      setValid((prevState) => {
        return { ...prevState, email: true };
      })
    } else {
      setValid((prevState) => {
        return { ...prevState, email: false };
      })
    }

    if (validatePassword(registerData.password)) {
      setValid((prevState) => {
        return { ...prevState, password: true };
      })
    } else {
      setValid((prevState) => {
        return { ...prevState, password: false };
      })
    }

    if (validateCPassword(registerData.confirmPassword)) {
      setValid((prevState) => {
        return { ...prevState, confirmPassword: true };
      })
    } else {
      setValid((prevState) => {
        return { ...prevState, confirmPassword: false };
      })
    }

    if (validateFname(registerData.fname)) {
      setValid((prevState) => {
        return { ...prevState, fname: true };
      })
    } else {
      setValid((prevState) => {
        return { ...prevState, fname: false };
      })
    }

    if (validateLname(registerData.lname)) {
      setValid((prevState) => {
        return { ...prevState, lname: true };
      })
    } else {
      setValid((prevState) => {
        return { ...prevState, lname: false };
      })
    }

    if (validateUsername(registerData.username)) {
      setValid((prevState) => {
        return { ...prevState, username: true };
      })
    } else {
      setValid((prevState) => {
        return { ...prevState, username: false };
      })
    }
  }, [registerData])


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

  function validateCPassword(confirmpassword) {
    if ((confirmpassword).length >= 8) {
        return true;
    }
    return false;
  }

  function validateUsername(username) {
    if ((username).length >= 3) {
        return true;
    }
    return false;
  }

  function validateFname(fname) {
    if (fname.trim() !== "") {
        return true;
    }
    return false;
  }

  function validateLname(lname) {
    if (lname.trim() !== "") {
        return true;
    }
    return false;
  }

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      let obj = {
        name: registerData.fname + ' ' + registerData.lname,
        username: registerData.username,
        gender: registerData.gender,
        email: registerData.email,
        password: registerData.password,
      }
      if (valid.email && valid.password && valid.fname && valid.lname && valid.confirmPassword && valid.username && registerData.gender) {
        const res = await fetch("http://localhost:3000/api/users/register", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(obj)
        });
        const data = await res.json();
        localStorage.setItem('user', JSON.stringify(data.user))
        navigate('/')
      }
    } catch (error) {
      notifyError()
    }
  };

	const notifyError = () => toast.error("Something went wrong!");


  return (
    <div>
      <section className='vh-100'>
        <div className='container-fluid h-custom vh-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-9 col-lg-6 col-xl-5'>
              <img
                src='https://img.freepik.com/free-vector/flat-psychiatrist-elderly-patient-with-alzheimer-diseas-dementia-psychiatric-anxiety-disorder-doctor-help-old-man-with-confusion-head-treatment-mental-problems-loss-memory_88138-768.jpg?w=826'
                className='img-fluid rounded mx-auto d-block mt-1 mb-2'
                alt='Sample'
              />
            </div>
            <div
              className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'
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
                      className={`form-control form-control-lg ${!valid.fname && isTouched.fname ? 'is-invalid' : ''}`}
                      placeholder='e.g. John'
                      onChange={(e) => {
                        setRegisterData((prevState) => {
                          return { ...prevState, fname: e.target.value };
                        });
                      }}
                      onBlur={()=> {
                        setIsTouched((prevState) => {
                          return { ...prevState, fname: true };
                        })
                      }}
                    />
                    <label className='form-label' htmlFor='fname'>
                      First Name
                    </label>
                  </div>
                  <div className='form-outline mb-4 ms-2 '>
                    <input
                      type='text'
                      id='lname'
                      className={`form-control form-control-lg ${!valid.lname && isTouched.lname ? 'is-invalid' : ''}`}
                      placeholder='e.g. Wick'
                      onChange={(e) => {
                        setRegisterData((prevState) => {
                          return { ...prevState, lname: e.target.value };
                        });
                      }}
                      onBlur={()=> {
                        setIsTouched((prevState) => {
                          return { ...prevState, lname: true };
                        })
                      }}
                    />
                    <label className='form-label' htmlFor='lname'>
                      Last Name
                    </label>
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='form-outline mb-4 '>
                    <input
                      type='text'
                      id='username'
                      className={`form-control form-control-lg ${!valid.username && isTouched.username ? 'is-invalid' : ''}`}
                      placeholder='e.g. John21'
                      onChange={(e) => {
                        setRegisterData((prevState) => {
                          return { ...prevState, username: e.target.value };
                        });
                      }}
                      onBlur={()=> {
                        setIsTouched((prevState) => {
                          return { ...prevState, username: true };
                        })
                      }}
                    />
                    <label className='form-label' htmlFor='username'>
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
                      <label className='form-check-label' htmlFor='male'>
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
                      <label className='form-check-label' htmlFor='female'>
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
                      <label className='form-check-label' htmlFor='other'>
                        Other
                      </label>
                    </div>
                  </div>
                </div>

                <div className='form-outline mb-4 '>
                  <input
                    type='email'
                    id='email'
                    className={`form-control form-control-lg ${!valid.email && isTouched.email ? 'is-invalid' : ''}`}
                    placeholder='e.g. john21@gmail.com'
                    onChange={(e) => {
                      setRegisterData((prevState) => {
                        return { ...prevState, email: e.target.value };
                      });
                    }}
                    onBlur={()=> {
                      setIsTouched((prevState) => {
                        return { ...prevState, email: true };
                      })
                    }}
                  />
                  <label className='form-label ' htmlFor='email'>
                    Email address
                  </label>
                </div>

                <div className='form-outline mb-3'>
                  <input
                    type='password'
                    id='password'
                    className={`form-control form-control-lg ${!valid.password && isTouched.password ? 'is-invalid' : ''}`}
                    placeholder='*************'
                    autoComplete='true'
                    onChange={(e) => {
                      setRegisterData((prevState) => {
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
                <div className='form-outline'>
                  <input
                    type='password'
                    id='confirmpassword'
                    className={`form-control form-control-lg ${!valid.confirmPassword && isTouched.confirmPassword ? 'is-invalid' : ''}`}
                    placeholder='*************'
                    autoComplete='true'
                    onChange={(e) => {
                      setRegisterData((prevState) => {
                        return {
                          ...prevState,
                          confirmPassword: e.target.value,
                        };
                      });
                    }}
                    onBlur={()=> {
                      setIsTouched((prevState) => {
                        return { ...prevState, confirmPassword: true };
                      })
                    }}
                  />
                  <label className='form-label' htmlFor='password'>
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
                    <label className='form-check-label' htmlFor='terms-check'>
                      Already have an account? <Link to='/login'>Login</Link>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
    			<ToastContainer />
        </div>
      </section>
    </div>
  );
};

export default Register;
