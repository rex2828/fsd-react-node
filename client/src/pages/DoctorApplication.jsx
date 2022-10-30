/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorApplication = () => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    category: "",
    languages: {
      English: false,
      Hindi: false,
      Telugu: false,
    },
    education: "",
    experience: "",
    email: "",
    fee: "",
    address: "",
    phone: "",
  });


	const notifySuccess = () => toast.success("Application sent!");
	const notifyError = () => toast.error("Something went wrong!");

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const data = {
        name: doctorData.name,
        category: doctorData.category,
        languages: doctorData.languages,
        fee: doctorData.fee,
        edu: doctorData.education,
        experience: doctorData.experience,
        email: doctorData.email,
        mobile: doctorData.phone,
        clinicaddress: doctorData.address,
      }
      const res = await fetch("http://localhost:3000/api/doctors/register", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data)
      })
      const doctorRegister = await res.json()
      console.log(doctorRegister)
      if (doctorRegister) {
        notifySuccess()
      }
    } catch (error) {
			notifyError()
    }
  };

  return (
    <>
      <section className='vh-100'>
        <div className='container-fluid h-custom'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-9 col-lg-6 col-xl-5'>
              <img
                src='https://img.freepik.com/free-vector/flat-psychiatrist-elderly-patient-with-alzheimer-diseas-dementia-psychiatric-anxiety-disorder-doctor-help-old-man-with-confusion-head-treatment-mental-problems-loss-memory_88138-768.jpg?w=826'
                className='img-fluid rounded mx-auto d-block mt-1 mb-2'
                alt='Sample image'
              />
            </div>

            <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1' id='Signup'>
              <form
                className='myForm doctor-add-form'
                id='doctor-add-form'
                onSubmit={handleClick}>
                <p className='text-center h1 fw-bold mx-1 mx-md-3 mt-4 '>
                  Apply Here
                </p>
                <div className='divider d-flex align-items-center my-4'></div>
                <div className='form-outline mb-4 me-2'>
                  <label className='form-label' htmlFor='d-name'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='d-name'
                    className='form-control form-control-lg fname'
                    placeholder='e.g. John'
                    onChange={(e) => {
                      setDoctorData((prevState) => {
                        return { ...prevState, name: e.target.value };
                      });
                    }}
                  />
                </div>

                <div className='d-flex justify-content-between'>
                  <div className='form-outline mb-4 '>
                    <label className='form-label' htmlFor='d-category'>
                      Category
                    </label>
                    <input
                      type='text'
                      id='d-category'
                      className='form-control form-control-lg category'
                      placeholder='e.g. Orthopedician'
                      onChange={(e) => {
                        setDoctorData((prevState) => {
                          return { ...prevState, category: e.target.value };
                        });
                      }}
                    />
                  </div>
                </div>
                <p>Language</p>
                <div
                  className='mb-4 ms-3 d-flex flex-row'
                  onChange={(e) => {
                    setDoctorData((prevState) => {
                      return {
                        ...prevState,
                        languages: {
                          ...prevState.languages,
                          [e.target.value]: e.target.checked,
                        },
                      };
                    });
                  }}>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='inlineRadioOptions'
                      id='L1'
                      value='Hindi'
                    />
                    <label className='form-check-label' htmlFor='Hindi'>
                      Hindi
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='inlineRadioOptions'
                      id='L2'
                      value='English'
                    />
                    <label className='form-check-label' htmlFor='English'>
                      English
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='inlineRadioOptions'
                      id='L3'
                      value='Telugu'
                    />
                    <label className='form-check-label' htmlFor='Telgu'>
                      Telugu
                    </label>
                  </div>
                </div>
                <div className='form-outline mb-4 '>
                  <label className='form-label ' htmlFor='d-edu'>
                    Education Details
                  </label>
                  <input
                    type='text'
                    id='d-edu'
                    className='form-control form-control-lg eduactionDetails'
                    placeholder='Recent Degree You have'
                    onChange={(e) => {
                      setDoctorData((prevState) => {
                        return { ...prevState, education: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className='form-outline mb-3'>
                  <label className='form-label' htmlFor='d-exp'>
                    Experience(in Years)
                  </label>
                  <input
                    type='number'
                    id='d-exp'
                    className='form-control form-control-lg'
                    autoComplete='true'
                    placeholder='experience'
                    onChange={(e) => {
                      setDoctorData((prevState) => {
                        return { ...prevState, experience: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className='form-outline mb-3'>
                  <label className='form-label' htmlFor='d-fee'>
                    Fee(in Rs)
                  </label>
                  <input
                    type='number'
                    id='d-fee'
                    className='form-control form-control-lg'
                    autoComplete='true'
                    placeholder='fee'
                    onChange={(e) => {
                      setDoctorData((prevState) => {
                        return { ...prevState, fee: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className='form-outline'>
                  <label className='form-label' htmlFor='d-address'>
                    Enter Clinical Address
                  </label>
                  <input
                    type='text'
                    id='d-address'
                    className='form-control form-control-lg'
                    autoComplete='true'
                    placeholder='address....'
                    onChange={(e) => {
                      setDoctorData((prevState) => {
                        return { ...prevState, address: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className='form-outline mb-4 '>
                  <label className='form-label ' htmlFor='d-email'>
                    Email address
                  </label>
                  <input
                    type='email'
                    id='d-email'
                    className='form-control form-control-lg'
                    placeholder='e.g. john21@gmail.com'
                    onChange={(e) => {
                      setDoctorData((prevState) => {
                        return { ...prevState, email: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className='form-outline mb-4 '>
                  <label className='form-label ' htmlFor='d-mobile'>
                    Contact No
                  </label>
                  <input
                    type='tel'
                    id='d-mobile'
                    className='form-control form-control-lg'
                    placeholder='e.g. +917766554433'
                    onChange={(e) => {
                      setDoctorData((prevState) => {
                        return { ...prevState, phone: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className='d-flex justify-content-between align-items-center flex-column'>
                  <div className='text-center text-lg-start mt-4 pt-2'>
                    <button
                      type='Submit'
                      className='btn btn-warning btn-lg'
                      id='doctor-add-btn'
                      //   style='padding-left: 2.5rem; padding-right: 2.5rem;'
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
			<ToastContainer />
    </>
  );
};

export default DoctorApplication;
