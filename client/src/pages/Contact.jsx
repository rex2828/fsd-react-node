import React from "react";
import "react-bootstrap";
import imgSrc from '../img/contactSvg.svg';
import {useState} from 'react';
function Contact() {
	const [contactForm, setContactForm]  = useState({
		username:"",
		email:"",
		phone:"",
		message:""
	});
    function handleInput(event)
    {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(event.target.value);
        // validateInput(name,value);
        setContactForm({...contactForm,[name]:value});
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        const contactData ={...contactForm};
		setContactForm({...contactForm, contactData});
		setContactForm({username:"",email:"",phone:"",message:""});
        console.table(contactData);
    }
	return (
		<div className="contact3 py-5">
		<div className="row no-gutters">
			<div className="container">
			<div className="row">
				<div className="col-lg-6">
				<div className="card-shadow">
					<img
					src={imgSrc}
					className="img-fluid" alt='img loading...'
					/>
				</div>
				</div>
				<div className="col-lg-6" style={{width:'40%'}}>
				<div className="contact-box ml-3">
					<h1 className="font-weight-light mt-2">Quick Contact</h1>
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
							required ='required'
							placeholder="message" onChange={handleInput} value={contactForm.message}
							></textarea>
						</div>
						</div>
						<div className="col-lg-12">
						<button
							type="submit"
							className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2 btn-secondary"
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
        </div>
      </div>
    </div>
  );
}
export default Contact;
