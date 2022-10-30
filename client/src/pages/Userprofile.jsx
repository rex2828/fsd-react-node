import React from 'react'
import 'react-bootstrap';
import style from '../css/UserProfile.module.css';
import unknwonimg from '../img/unknown.png'
const Userprofile = () => {

	return (
		<div className="container" style={{paddingTop:'40px'}}>
        <div className={`${style.mainbody}main-body`} style={{fontSize:'1rem'}}>
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                    <div className={`${style.card} card`}>
                        <div className={`${style.cardbody}card-body photoColumn`}>
                            <div className="d-flex flex-column align-items-center text-center">
                                <div className="profile-pic-div">
                                    <img src={unknwonimg} alt="avatar" id="photo"  style={{paddingTop:'20px',paddingBottom:'20px'}}/>
                                    <form method="POST" action="/api/users/upload" enctype="multipart/form-data" style={{fontSize:'1rem'}}>
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
									{/* {{user.name}} */} Gulshan Kumar
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 rowProfileColumn">
                                    <h5 className="mb-0">Email</h5>
                                </div>
                                <div className="col-sm-9 text-secondary edit" id="email">
									{/* {{user.email}} */} gulshan.k20@iiits.in
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 rowProfileColumn">
                                    <h5 className="mb-0">Username</h5>
                                </div>
                                <div className="col-sm-9 text-secondary edit" id="username">
									{/* {{user.username}} */} gulshan1002
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 rowProfileColumn">
                                    <h5 className="mb-0">Mobile</h5>
                                </div>
                                <div className="col-sm-9 text-secondary edit" id="mobile">
									{/* {{user.mobile}} */} 68798278990
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 rowProfileColumn">
                                    <h5 className="mb-0">Address</h5>
                                </div>
                                <div className="col-sm-9 text-secondary edit form-outline mb-4" id="address">
                                    {/* {{user.address}} */} Patna,Bihar
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
                                    <h5 className="d-flex align-items-center mb-3">
                                        <h5 className="appointmentHistory">Appointment History</h5>
                                    </h5>
                                    <div id="appointments">
									</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	)
}

export default Userprofile