import React from 'react'
import style from "../css/Faq.module.css";
import faqImg from "../img/faq.gif";
import "react-bootstrap";
function FaqTitle()
{
    return(<div className={style.container}>
    <div className={style.textCenter}>
        <h2 style={{marginTop:'10px'}}>Frequently Asked Questions</h2>
        <p className={style.lead}>Share Your Doubts</p>
    </div>
</div>)
}
function FaqContent()
{
    return(<div className={`row my-5 g-5 justify-content-around align-items-center`}>
    <div className={`col-6 col-lg-4`}>
        <img src={faqImg} alt="ebook" className={style.imgFluid} style={{minWidth:'500px'}}></img>
    </div>
    <div className={`col-lg-6`}>
        <div className={style.accordion} id="FAQs">
            <div className={style.accordionItem}>
                <h2 className={`accordion-header`}>
                    <button className={`accordion-button`} type="button" data-bs-toggle="collapse"
                        data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
                        1. Why should you trust us?
                    </button>
                </h2>
                <div id="chapter-1" className={`accordion-collapse collapse`} aria-labelledby="heading-1"
                    data-bs-parent="#chapters">
                    <div className={`accordion-body`}>
                        <p>We have the collection of best doctors at your screen. Our team has verified
                            everyone's
                            professional skill. We are opearional 24*7 and all these facilities are being
                            provided
                            at economical price.</p>
                    </div>
                </div>
            </div>
            <div className={`accordion-item doubt`}>
                <h2 className="accordion-header" id="heading-2">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#chapter-2" aria-expanded="true" aria-controls="chapter-2">
                        2. How to Book an Appointment?
                    </button>
                </h2>
                <div id="chapter-2" className="accordion-collapse collapse" aria-labelledby="heading-1"
                    data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>First Login , If you haven't login in the system and then search doctors accordingly
                            what
                            typpe of doctor's you want either dietician , physician or else and then click on
                            profile of the doctor. And then a appointment form will appear, fill the all
                            required
                            details ans then make the payment. You are done! You have made an appointment with
                            doctors.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item doubt">
                <h2 className="accordion-header" id="heading-3">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#chapter-3" aria-expanded="true" aria-controls="chapter-3">
                        3. Is there any extra charges ?
                    </button>
                </h2>
                <div id="chapter-3" className="accordion-collapse collapse" aria-labelledby="heading-1"
                    data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>No, Currently we are not charging extra money for booking an appointment.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item doubt">
                <h2 className="accordion-header" id="heading-4">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#chapter-4" aria-expanded="true" aria-controls="chapter-4">
                        4. How to see my past appointment details?
                    </button>
                </h2>
                <div id="chapter-4" className="accordion-collapse collapse" aria-labelledby="heading-1"
                    data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>You need to first login, If you haven't after login go to patien't profile page and
                            see
                            all your personal information.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item doubt">
                <h2 className="accordion-header" id="heading-5">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#chapter-5" aria-expanded="true" aria-controls="chapter-5">
                        5. How to search for best doctors?
                    </button>
                </h2>
                <div id="chapter-5" className="accordion-collapse collapse" aria-labelledby="heading-1"
                    data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>Go to navbar and then click on doctors, We have our own rating system according to
                            that
                            you can select your doctors. </p>
                    </div>
                </div>
            </div>
            <div className={`accordion-item doubt`}>
                <h2 className={`accordion-header`} id="heading-5">
                    <button className={`accordion-button`} type="button" data-bs-toggle="collapse"
                        data-bs-target="#chapter-5" aria-expanded="true" aria-controls="chapter-5">
                        6. Want to cotact us?
                    </button>
                </h2>
                <div id="chapter-5" className={`accordion-collapse collapse`} aria-labelledby="heading-1"
                    data-bs-parent="#chapters">
                    <div className={`accordion-body`}>
                        <p>Dont' worry, We are here to solve all your queries. Go to bottom of the page and you
                            will
                            find email id and contact no then mail or call us </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
}
const Faq = () => {
    return (
        <div className={style.mainContainer}>
        <FaqTitle />
        <FaqContent />
        </div>
    )
}

export default Faq;