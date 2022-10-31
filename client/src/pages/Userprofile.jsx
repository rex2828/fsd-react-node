import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import 'react-bootstrap';
import Appointment from '../components/Appointment';
import style from '../css/UserProfile.module.css';
import unknwonimg from '../img/unknown.png'

const Userprofile = () => {

    const [userData, setUserData] = useState({
        fullname: "",
        email: "",
        username: "",
        mobile: "",
        address: "",
    })

    const [appointmentData, setAppointmentData] = useState([])

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/api/users/me', {
          credentials: 'include'
        })
        const data = await res.json()
        
        setUserData({
            fullname: data.name,
            email: data.email,
            username: data.username,
        })
    }

    const fetchAppointmentData = async () => {
        const res = await fetch('http://localhost:3000/api/getappointments', {
            credentials: 'include'
        });
        const data = await res.json();
        console.log(data)
        setAppointmentData([...data])
    }

    useEffect(() => {
        fetchUserData()
        fetchAppointmentData()
    }, [])


	return (
        <>
		<div className="container" style={{paddingTop:'100px'}}>
            <div className={`${style.mainbody}main-body`} style={{fontSize:'1rem'}}>
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className={`${style.card} card`}>
                            <div className={`${style.cardbody}card-body photoColumn`}>
                                <div className="d-flex flex-column align-items-center text-center">
                                    <div className="profile-pic-div">
                                        <img src={unknwonimg} alt="avatar" id="photo"  style={{paddingTop:'20px',paddingBottom:'20px'}}/>
                                        <form method="POST" action="/api/users/upload" encType="multipart/form-data" style={{fontSize:'1rem'}}>
                                            <input type="file" name="image" id="image-input" style={{fontSize:'1rem'}} />
                                            <button type="submit" className="btn btn-primary mx-3"
                                                id="uploadbtn" style={{fontSize:'1rem',marginBottom:'20px'}}>Upload</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 dataColumn">
                        <div className={`${style.card}card mb-3`}>
                            <div className={`${style.cardbody}card-body`} style={{paddingTop:'20px'}}>
                                <div className="row">
                                    <div className="col-sm-3 rowProfileColumn">
                                        <h5 className="mb-0">Full Name</h5>
                                    </div>
                                    <div className="col-sm-9 text-secondary edit" id="fullname">
                                        {userData.fullname}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3 rowProfileColumn">
                                        <h5 className="mb-0">Email</h5>
                                    </div>
                                    <div className="col-sm-9 text-secondary edit" id="email">
                                        {userData.email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3 rowProfileColumn">
                                        <h5 className="mb-0">Username</h5>
                                    </div>
                                    <div className="col-sm-9 text-secondary edit" id="username">
                                        {userData.username}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3 rowProfileColumn">
                                        <h5 className="mb-0">Mobile</h5>
                                    </div>
                                    <div className="col-sm-9 text-secondary edit" id="mobile">
                                        {userData.mobile ? userData.mobile : 'N/A'}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3 rowProfileColumn">
                                        <h5 className="mb-0">Address</h5>
                                    </div>
                                    <div className="col-sm-9 text-secondary edit form-outline mb-4" id="address">
                                        {userData.address ? userData.address : 'N/A'}
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="profile">
                                <div className={`${style.child} ${style.editProfile}child`}>
                                    <button type="button" id="editProfile" className='btn-primary btn'>Edit Profile</button>
                                </div>
                                <div className={`${style.child} ${style.saveProfile}child`}>
                                    <button type="submit" id="saveProfile" className='btn-primary btn'>Save Profile</button>
                                </div>
                            </div>
                            <br />
                            <div className="col-sm-8 mb-3">
                                <div className="card h-100">
                                    <div className={`${style.cardbody}card-body`}>
                                        <h3 className="d-flex align-items-center mb-3">
                                            Appointment History
                                        </h3>
                                        <div id="appointments">
                                            {
                                                appointmentData.map((app) => {
                                                    return <Appointment key={app._id} props={app}/>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
	)
}

export default Userprofile