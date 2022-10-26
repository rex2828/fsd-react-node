import React from 'react'
function ContactImage()
{
	return(
		<div class="col-md-4 mb-3">
			<div class="card">
					<div class="card-body photoColumn">
						<div class="d-flex flex-column align-items-center text-center">
							<div class="profile-pic-div">
								<image src="{{user.imgsrc}}" alt="avatar" id="photo" />
								<form method="POST" action="/api/users/upload" enctype="multipart/form-data">
									<input type="file" name="image" id="image-input" />
									<button type="submit" class="btn btn-primary mx-3"
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
	<div class="col-md-8 dataColumn">
	<div class="card mb-3">
		<div class="card-body">
			<div class="row">
				<div class="col-sm-3 rowProfileColumn">
					<h2 class="mb-0">Full Name</h2>
				</div>
				{/* <div class="col-sm-9 text-secondary edit" id="fullname">{{user.name}}</div> */}
			</div>
			<hr></hr>
			<div class="row">
				<div class="col-sm-3 rowProfileColumn">
					<h2 class="mb-0">Email</h2>
				</div>
				{/* <div class="col-sm-9 text-secondary edit" id="email">{{user.email}}</div> */}
			</div>
			<hr></hr>
			<div class="row">
				<div class="col-sm-3 rowProfileColumn">
					<h2 class="mb-0">Username</h2>
				</div>
				{/* <div class="col-sm-9 text-secondary edit" id="username">{{user.username}}</div> */}
			</div>
			<hr></hr>
			<div class="row">
				<div class="col-sm-3 rowProfileColumn">
					<h2 class="mb-0">Mobile</h2>
				</div>
				{/* <div class="col-sm-9 text-secondary edit" id="mobile">{{user.mobile}}</div> */}
			</div>
			<hr></hr>
			<div class="row">
				<div class="col-sm-3 rowProfileColumn">
					<h2 class="mb-0">Address</h2>
				</div>
				{/* <div class="col-sm-9 text-secondary edit form-outline mb-4" id="address">{{user.address}}</div> */}
			</div>
			<hr></hr>
		</div>
		<div class="profile">
			<div class="child">
				<button type="button" id="editProfile">Edit Profile</button></div>
			<div class="child">
				<button type="submit" id="saveProfile">Save Profile</button></div>
		</div>
		<br></br>
		<div class="col-sm-8 mb-3">
			<div class="card h-100">
				<div class="card-body">
					<h2 class="d-flex align-items-center mb-3">
						<h2 class="appointmentHistory">Appointment History</h2>
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
		<div class="container">
			<div class="main-body">
				<div class="row gutters-sm">
				<ContactImage />
				<ContactProfileData />
				</div>
			</div>
		</div>
	)
}

export default Userprofile