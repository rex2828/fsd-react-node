import React from "react";
import "../css/Contact.css";
function ContactForm()
{
    return(<form>
        <h3>CONTACT US</h3>
        <input type="text" id="name" placeholder="Your Name..." required />
        <input type="email" id="email" placeholder="Your email id..." required />
        <input type="tel" id="phone" placeholder="Your phone no..." required />
        <textarea id="message" rows="4" placeholder="How can we help you...." required></textarea>
        <button type="submit" id="btn">Submit</button>
    </form>)
}
function ContactTitle()
{
    return(<div className="contactus-container">
        <ContactForm />
</div>)
}
const Contact =()=> {
    return(<ContactTitle />)
};
export default Contact;