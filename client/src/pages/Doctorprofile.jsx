import React from 'react';
import { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { useSearchParams } from "react-router-dom";
import style from "../css/DoctorProfile.css";
import unknownimg from "../img/unknown.png";
const Doctorprofile = () => {

    const [doctorData, setDoctorData] = useState({
        name: "",
        edu: "",
        category: "",
        fee: "",
        lang: "",
        exp: "",
        email: "",
        mobile: "",
        rating: ""
    });

    const [searchParams] = useSearchParams();

    const fetchDoctorData = useCallback(async () => {
        const res = await fetch(`http://localhost:3000/api/doctors/doctor/${searchParams.get("id")}`);
        const doctorDetails = await res.json();
        const obj = {
            name: doctorDetails.name,
            category: doctorDetails.category,
            state: doctorDetails.clinicaddress.split(',')[1],
            city: doctorDetails.clinicaddress.split(',')[0],
            edu: doctorDetails.edu,
            email: doctorDetails.email,
            mobile: doctorDetails.mobile,
            exp: doctorDetails.experience,
            fee: doctorDetails.fee,
            rating: doctorDetails.rating,
            lang: doctorDetails.languages
        };
        setDoctorData(obj);
    }, [searchParams]);


    useEffect(() => {
        fetchDoctorData();
    }, [fetchDoctorData]);



    return (
        <div className={`${style.doctorprofilecontainer} container`} style={{ marginTop: '100px' }}>
            <div className={`row justify-content-center`}>
                <div className={`col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn`}>
                    <div className={`card border-0 shadow`} style={{ height: '500px' }}>
                        <div className="profile-pic-div" style={{ padding: '40px' }}>
                            <img src={unknownimg} id="photo" style={{ maxWidth: '200px', maxHeight: '200px' }} alt="..." />
                        </div>
                        <div className={`${style.nameAddress}card-body p-1-9 p-xl-5`}>
                            <div className={`mb-4`}>
                                <h3 className={`h4 mb-0${style.h3}`}>{doctorData.name}</h3>
                                <span className={`text-primary`} style={{ paddingLeft: '40px' }}>CEO &amp; Founder</span>
                            </div>
                            <ul className={`list-unstyled mb-4`}>
                                <li className={`mb-3`}><a href="#!"><i className={`far fa-envelope display-25 me-3 text-secondary ${style.a}`}></i>{doctorData.email}</a></li>
                                <li className={`mb-3`}><a href="#!"><i className={`fas fa-mobile-alt display-25 me-3 text-secondary ${style.a}`}></i>{doctorData.mobile}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-8`}>
                    <div className={`ps-lg-1-6 ps-xl-5`}>
                        <div className={`mb-5 wow fadeIn`}>
                            <ul className={`list-group list-group-flush`}>
                                <li className={`list-group-item description`}>Category: {doctorData.category}</li>
                                <li className={`list-group-item description`}>Rating: {doctorData.rating}</li>
                                <li className={`list-group-item description`}>Consultant Fee: {doctorData.fee}</li>
                                <li className={`list-group-item description`}>No service in home</li>
                            </ul>
                        </div>
                        <div className={`mb-5 wow fadeIn`}>
                            <div className={`row mt-n4`}>
                                <div className={`col-sm-6 col-xl-4 mt-4`}>
                                    <div className={`card text-center border-0 rounded-3`}>
                                        <div className={`card-body education`}>
                                            <h2 className={`mb-0 text-primary`}>#Education</h2>
                                            <i className={`ti-bookmark-alt icon-box medium rounded-3 mb-4`}></i>
                                            <p className={`mb-0 ${style.p}`}>{doctorData.edu}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-sm-6 col-xl-4 mt-4`}>
                                    <div className={`card text-center border-0 rounded-3`}>
                                        <div className={`card-body education`}>
                                            <h2 className={`mb-0 text-primary`}>#Experience</h2>
                                            <i className={`ti-bookmark-alt icon-box medium rounded-3 mb-4`}></i>
                                            <p className={`mb-0 ${style.p}`}>{doctorData.exp}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Doctorprofile;