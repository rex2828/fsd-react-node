import React from 'react'
import "../css/DoctorProfile.css";
// import "../img/unknown.png" from unknownimg;
function DoctorProfile()
{
    return(<div className="col-lg-8">
    <div className="ps-lg-1-6 ps-xl-5">
        <div className="mb-5 wow fadeIn">
            <ul className="list-group list-group-flush">
                {/* <li className="list-group-item description">Category: {{doctor.category}}</li>
                <li className="list-group-item description">Language: {{doctor.languages}}</li>
                <li className="list-group-item description">Consultant Fee: {{doctor.fee}}</li> */}
                <li className="list-group-item description">No service in home</li>
            </ul>
        </div>
        <div className="mb-5 wow fadeIn">
            <div className="row mt-n4">
                <div className="col-sm-6 col-xl-4 mt-4">
                    <div className="card text-center border-0 rounded-3">
                        <div className="card-body education">
                            <h2 className="mb-0 text-primary">#Education</h2>
                            <i className="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
                            {/* <p className="mb-0">{{doctor.edu}}</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4 mt-4">
                    <div className="card text-center border-0 rounded-3">
                        <div className="card-body experience">
                            <h2 className="mb-0 text-primary">#Experience</h2>
                            <i className="ti-medall-alt icon-box medium rounded-3 mb-4"></i>
                            {/* <p className="mb-0">About {{doctor.experience}} year Experience and professional
                                in {{doctor.category}}. */}
                            {/* </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
}
function DoctorData()
{
    return(<div className="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
    <div className="card border-0 shadow">
        <div className="profile-pic-div">
            <img src="/img/unknown.png" id="photo" style={{maxWidth:'200px',maxHeight:'400px'}} alt="unknown" />
        </div>
        <div className="card-body p-1-9 p-xl-5 nameAddress">
            <div className="mb-4">
                {/* <h3 className="h4 mb-0">{{doctor.name}}</h3>
                <span className="text-primary">{{doctor.category}}</span> */}
            </div>
            <ul className="list-unstyled mb-4">
                {/* <li className="mb-3"><a href="#!"><i
                            className="far fa-envelope display-25 me-3 text-secondary"></i>{{doctor.email}}</a>
                </li> */}
                {/* <li className="mb-3"><a href="#!"><i
                            className="fas fa-mobile-alt display-25 me-3 text-secondary"></i>{{doctor.mobile}}</a>
                </li> */}
                {/* <li><a href="#!"><i
                            className="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>{{doctor.clinicaddress}}</a>
                </li> */}
            </ul>
        </div>
    </div>
</div>)
}
const Doctorprofile = () => {
    return (
		<div className="doctorprofile-container">
			<div className="row justify-content-center">
				<DoctorData />
				<DoctorProfile />
			</div>
		</div>
        
	)
}

export default Doctorprofile