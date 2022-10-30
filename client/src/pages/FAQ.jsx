import React from 'react'
// import style from "../css/Faq.module.css";
// import faqImg from "../img/faq.gif";
import "react-bootstrap";
// function FaqTitle()
// {
//     return(<div className={style.container}>
//     <div className={style.textCenter}>
//         <h2 style={{marginTop:'10px'}}>Frequently Asked Questions</h2>
//         <p className={style.lead}>Share Your Doubts</p>
//     </div>
// </div>)
// }
// function FaqContent()
// {
//     return(<div className={`row my-5 g-5 justify-content-around align-items-center`} style={{columnGap:'40px'}}>
//     <div className={`col-6 col-lg-4`} style={{paddingRight:'20rem'}}>
//         <img src={faqImg} alt="ebook" className={style.imgFluid} style={{minWidth:'500px'}}></img>
//     </div>
//     <div className={`col-lg-6`} style={{marginRight:'10rem'}}>
//         <div className={style.accordion} id="FAQs">
//             <div className={`${style.accordionItem} accordion-item`}>
//                 <h2 className={`accordion-header`}>
//                     <button className={`accordion-button`} type="button" data-bs-toggle="collapse"
//                         data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
//                         1. Why should you trust us?
//                     </button>
//                 </h2>
//                 <div id="chapter-1" className={`accordion-collapse collapse`} aria-labelledby="heading-1"
//                     data-bs-parent="#chapters">
//                     <div className={`accordion-body`}>
//                         <p>We have the collection of best doctors at your screen. Our team has verified
//                             everyone's
//                             professional skill. We are opearional 24*7 and all these facilities are being
//                             provided
//                             at economical price.</p>
//                     </div>
//                 </div>
//             </div>
//             <div className={`accordion-item doubt`}>
//                 <h2 className="accordion-header" id="heading-2">
//                     <button className="accordion-button" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#chapter-2" aria-expanded="true" aria-controls="chapter-2">
//                         2. How to Book an Appointment?
//                     </button>
//                 </h2>
//                 <div id="chapter-2" className="accordion-collapse collapse" aria-labelledby="heading-1"
//                     data-bs-parent="#chapters">
//                     <div className="accordion-body">
//                         <p>First Login , If you haven't login in the system and then search doctors accordingly
//                             what
//                             typpe of doctor's you want either dietician , physician or else and then click on
//                             profile of the doctor. And then a appointment form will appear, fill the all
//                             required
//                             details ans then make the payment. You are done! You have made an appointment with
//                             doctors.</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion-item doubt">
//                 <h2 className="accordion-header" id="heading-3">
//                     <button className="accordion-button" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#chapter-3" aria-expanded="true" aria-controls="chapter-3">
//                         3. Is there any extra charges ?
//                     </button>
//                 </h2>
//                 <div id="chapter-3" className="accordion-collapse collapse" aria-labelledby="heading-1"
//                     data-bs-parent="#chapters">
//                     <div className="accordion-body">
//                         <p>No, Currently we are not charging extra money for booking an appointment.</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion-item doubt">
//                 <h2 className="accordion-header" id="heading-4">
//                     <button className="accordion-button" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#chapter-4" aria-expanded="true" aria-controls="chapter-4">
//                         4. How to see my past appointment details?
//                     </button>
//                 </h2>
//                 <div id="chapter-4" className="accordion-collapse collapse" aria-labelledby="heading-1"
//                     data-bs-parent="#chapters">
//                     <div className="accordion-body">
//                         <p>You need to first login, If you haven't after login go to patien't profile page and
//                             see
//                             all your personal information.</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion-item doubt">
//                 <h2 className="accordion-header" id="heading-5">
//                     <button className="accordion-button" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#chapter-5" aria-expanded="true" aria-controls="chapter-5">
//                         5. How to search for best doctors?
//                     </button>
//                 </h2>
//                 <div id="chapter-5" className="accordion-collapse collapse" aria-labelledby="heading-1"
//                     data-bs-parent="#chapters">
//                     <div className="accordion-body">
//                         <p>Go to navbar and then click on doctors, We have our own rating system according to
//                             that
//                             you can select your doctors. </p>
//                     </div>
//                 </div>
//             </div>
//             <div className={`accordion-item doubt`}>
//                 <h2 className={`accordion-header`} id="heading-5">
//                     <button className={`accordion-button`} type="button" data-bs-toggle="collapse"
//                         data-bs-target="#chapter-5" aria-expanded="true" aria-controls="chapter-5">
//                         6. Want to cotact us?
//                     </button>
//                 </h2>
//                 <div id="chapter-5" className={`accordion-collapse collapse`} aria-labelledby="heading-1"
//                     data-bs-parent="#chapters">
//                     <div className={`accordion-body`}>
//                         <p>Dont' worry, We are here to solve all your queries. Go to bottom of the page and you
//                             will
//                             find email id and contact no then mail or call us </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>)
// }
const Faq = () => {
    return (
        <section>
  <h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
  <p class="text-center mb-5">
    Find the answers for the most frequently asked questions below
  </p>

  <div class="row">
    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="far fa-paper-plane text-primary pe-2"></i> A simple
        question?</h6>
      <p>
        <strong><u>Absolutely!</u></strong> We work with top payment companies which guarantees
        your
        safety and
        security. All billing information is stored on our payment processing partner.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-pen-alt text-primary pe-2"></i> A question
        that
        is longer then the previous one?</h6>
      <p>
        <strong><u>Yes, it is possible!</u></strong> You can cancel your subscription anytime in
        your
        account. Once the subscription is
        cancelled, you will not be charged next month.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-user text-primary pe-2"></i> A simple
        question?
      </h6>
      <p>
        Currently, we only offer monthly subscription. You can upgrade or cancel your monthly
        account at any time with no further obligation.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-rocket text-primary pe-2"></i> A simple
        question?
      </h6>
      <p>
        Yes. Go to the billing section of your dashboard and update your payment information.
      </p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-home text-primary pe-2"></i> A simple
        question?
      </h6>
      <p><strong><u>Unfortunately no</u>.</strong> We do not issue full or partial refunds for any
        reason.</p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-primary"><i class="fas fa-book-open text-primary pe-2"></i> Another
        question that is longer than usual</h6>
      <p>
        Of course! We’re happy to offer a free plan to anyone who wants to try our service.
      </p>
    </div>
  </div>
</section>
    )
}

export default Faq;