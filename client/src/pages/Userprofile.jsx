import React from 'react'
function ContactImage()
{
	return(
		<div className="col-md-4 mb-3">
			<div className="card">
					<div className="card-body photoColumn">
						<div className="d-flex flex-column align-items-center text-center">
							<div className="profile-pic-div">
								<image src="{{user.imgsrc}}" alt="avatar" id="photo" />
								<form method="POST" action="/api/users/upload" enctype="multipart/form-data">
									<input type="file" name="image" id="image-input" />
									<button type="submit" className="btn btn-primary mx-3"
										id="uploadbtn">Upload</button>
								</form>
							</div>
						</div>
					</div>
			</div>
		</div>)
}
function ContactProfileData()
{
	return(
	<div className="col-md-8 dataColumn">
	<div className="card mb-3">
		<div className="card-body">
			<div className="row">
				<div className="col-sm-3 rowProfileColumn">
					<h2 className="mb-0">Full Name</h2>
				</div>
				{/* <div className="col-sm-9 text-secondary edit" id="fullname">{{user.name}}</div> */}
			</div>
			<hr></hr>
			<div className="row">
				<div className="col-sm-3 rowProfileColumn">
					<h2 className="mb-0">Email</h2>
				</div>
				{/* <div className="col-sm-9 text-secondary edit" id="email">{{user.email}}</div> */}
			</div>
			<hr></hr>
			<div className="row">
				<div className="col-sm-3 rowProfileColumn">
					<h2 className="mb-0">Username</h2>
				</div>
				{/* <div className="col-sm-9 text-secondary edit" id="username">{{user.username}}</div> */}
			</div>
			<hr></hr>
			<div className="row">
				<div className="col-sm-3 rowProfileColumn">
					<h2 className="mb-0">Mobile</h2>
				</div>
				{/* <div className="col-sm-9 text-secondary edit" id="mobile">{{user.mobile}}</div> */}
			</div>
			<hr></hr>
			<div className="row">
				<div className="col-sm-3 rowProfileColumn">
					<h2 className="mb-0">Address</h2>
				</div>
				{/* <div className="col-sm-9 text-secondary edit form-outline mb-4" id="address">{{user.address}}</div> */}
			</div>
			<hr></hr>
		</div>
		<div className="profile">
			<div className="child">
				<button type="button" id="editProfile">Edit Profile</button></div>
			<div className="child">
				<button type="submit" id="saveProfile">Save Profile</button></div>
		</div>
		<br></br>
		<div className="col-sm-8 mb-3">
			<div className="card h-100">
				<div className="card-body">
					<h2 className="d-flex align-items-center mb-3">
						<h2 className="appointmentHistory">Appointment History</h2>
					</h2>
					<div id="appointments"></div>
				</div>
			</div>
		</div>
	</div>
</div>)
}
const Userprofile = () => {
	return (
		<div className="container">
			<div className="main-body">
				<div className="row gutters-sm">
				<ContactImage />
				<ContactProfileData />
				</div>
			</div>
		</div>
	)
}

export default Userprofile