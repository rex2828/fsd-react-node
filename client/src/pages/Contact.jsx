import React from "react";
import "react-bootstrap";
import imgSrc from '../img/contactSvg.svg';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Contact () {
	const [contactForm, setContactForm] = useState({
		username: "",
		email: "",
		phone: "",
		message: ""
	});
	function handleInput (event) {
		const name = event.target.name;
		const value = event.target.value;
		// console.log(event.target.value);
		// validateInput(name,value);
		setContactForm({ ...contactForm, [name]: value });
	}
	async function handleSubmit (event) {
		event.preventDefault();
		try {
			const obj = {
				name: contactForm.username,
				email: contactForm.email,
				phone: contactForm.phone,
				message: contactForm.message
			};
			const res = await fetch("http://localhost:3000/api/postContactData", {
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(obj)
			});
			const data = await res.json();
			console.log(data);
			if (data) {
				notifySuccess();
			}
		} catch (error) {
			notifyError();
		}
	}

	const notifySuccess = () => toast.success("Message sent!");
	const notifyError = () => toast.error("Something went wrong!");

	return (
		<>
			<div className="contact3 py-5" style={{ marginTop: "5rem" }}>
				<div className="row no-gutters">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="card-shadow">
									<img
										src={imgSrc}
										style={{ marginTop: "3rem" }}
										className="img-fluid" alt='img loading...'
									/>
								</div>
							</div>
							<div className="col-lg-6" style={{ width: '40%' }}>
								<div className="contact-box ml-3">
									<h1 className="font-weight-light mt-2" style={{ textAlign: 'center' }}>Quick Contact</h1>
									<form onSubmit={handleSubmit} className="mt-4">
										<div className="row">
											<div className="col-lg-12">
												<div className="form-group mt-2">
													<input
														className="form-control"
														type="text"
														required
														placeholder="Name" name="username" value={contactForm.username} onChange={handleInput}
													/>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group mt-2">
													<input
														className="form-control"
														type="email"
														name="email"
														required
														placeholder="Email" onChange={handleInput} value={contactForm.email}
													/>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group mt-2">
													<input
														className="form-control"
														type="tel"
														name="phone"
														required
														placeholder="phone" onChange={handleInput} value={contactForm.phone}
													/>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group mt-2">
													<textarea
														className="form-control"
														rows="3"
														name="message"
														required='required'
														placeholder="message" onChange={handleInput} value={contactForm.message}
													></textarea>
												</div>
											</div>
											<div className="col-lg-12">
												<button style={{ marginLeft: '40%' }}
													type="submit"
													className="btn btn-primary btn-danger-gradiant mt-3 text-white border-0 px-3 py-2 "
												>
													{/* Submit */}
													<span>SUBMIT</span>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<ToastContainer />
					</div>
				</div>
			</div>
		</>
	);
}
export default Contact;
