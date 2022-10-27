import React from "react";
import { useState } from "react";
import "../css/Contact.css";
// import axios from "axios";
function sendEmail()
{
    
}
function Form()
{
    const [contactForm, setContactForm]  = useState({
        username:"",
        email:"",
        phone:"",
        message:""
    });
    const [validateForm, setValidateForm] = useState(true);
    function validateInput(data)
    {
        // console.table(data.username.length);
        if(data.username.length<3)
        {
            window.alert("Please Enter Valid Name!");
            return false;
        }
        let emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        if(!data.email.match(emailValid))
        {
            window.alert("Please Enter an valid Email id!");
            return false;
        }
        let phoneno = /^\d{10}$/;
        if(!data.phone.match(phoneno))
        {
            window.alert("Please Enter an valid Telephone no.")
            return false;
        }
        if(data.message.length<10)
        {
            window.alert("Message too short!");
            return false;
        }
        return true;
    }
    // function postData()
    // {
    //     axios.post("/api/contact")
    //     .then((contactFor)=>{

    //     })
    //     .catch(()=>
    //     {
    //         console.log("Error occured!");
    //     })
    // }
    function handleInput(event)
    {
        const name = event.target.name;
        const value = event.target.value;
        console.log(event.target.value);
        // validateInput(name,value);
        setContactForm({...contactForm,[name]:value});
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        const contactData ={...contactForm};
        // console.log(contactData);
        setValidateForm(validateInput(contactData));
        console.log(validateForm);
        if(validateForm===true)
        {
            setContactForm({...contactForm, contactData});
            setContactForm({username:"",email:"",phone:"",message:""});
        }
        console.table(contactData);
    }
    return(<form action="/contact" onSubmit={sendEmail}>
        <h3>CONTACT US</h3>
        <input type="text" id="name" name="username" value={contactForm.username} onChange={handleInput} placeholder="Your Name..." required />
        <input type="email" id="email" name="email" value={contactForm.email} onChange={handleInput} placeholder="Your email id..." required />
        <input type="tel" id="phone" name="phone" value={contactForm.phone} onChange={handleInput} placeholder="Your phone no..." required />
        <textarea id="message" rows="4" name="message" value={contactForm.message} onChange={handleInput} placeholder="How can we help you...." required></textarea>
        <button type="submit" id="btn" onClick={handleSubmit}>Submit</button>
    </form>)
}
function ContactTitle()
{
    return(<div className="contactus-container">
        <Form />
</div>)
}
const Contact =()=> {
    return(<ContactTitle />)
};
export default Contact;