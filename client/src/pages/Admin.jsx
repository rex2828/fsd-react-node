import React from "react";

import InfoCard from "../components/Admin/InfoCard";
import styles from "../css/Admin.module.css";

import logo from "../img/logo.png";

function Admin() {

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div className={`${styles["admin"]}`}>
      <header className={`${styles["page-header"]}`}>
        <nav>
          <button className={`toggle-mob-menu`} aria-expanded="false" aria-label="open menu">
            <svg viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
                d="M96 256h320M96 176h320M96 336h320" />
            </svg>
          </button>
          <ul className={`${styles["admin-menu"]}`}>
            <img src={logo} alt="logo" />
            <li className={`${styles["menu-heading"]}`}>
              <h3>Admin</h3>
            </li>
            <li>
              <div className={`${styles["anchor"]}`} id="patientsNavBtn">
                <span>Patient's Data</span>
              </div>
            </li>
            <li>
              <div className={`${styles["anchor"]}`} id="doctorsNavBtn">
                <span>Doctor's Data</span>
              </div>
            </li>
            <li>
              <div className={`${styles["anchor"]} ${styles["hide"]}`} id="doctorsNavBtn">
                <span>Back</span>
              </div>
            </li>
            <li>
              <button className={`${styles["collapse-btn"]}`} aria-expanded="true" aria-label="collapse menu">
                <span>Collapse</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div className={`${styles["page-content"]}`}>
        <section className={`${styles["search-and-user"]}`}>
          <form onSubmit={submitHandler}>
            <input type="search" placeholder="Search Pages..." />
            <button type="submit" aria-label="submit form">

            </button>
          </form>
          <div className={`${styles["admin-profile"]}`}>
            <span className={`${styles["greeting"]}`}>Admin</span>
            <div className={`${styles["notification"]}`}>
              <span className={`${styles["badge"]}`}>1</span>
            </div>
          </div>
        </section>
        <div id="patients">
          <div className={`${styles["card-heading"]}`}>
            <h1>Users</h1>
          </div>
          <section id="patientContainer" className={`${styles["grid"]}`}>
            <InfoCard className={styles} />
            <InfoCard className={styles} />
          </section>
        </div>
        <div id="doctors" className={`${styles[""]}`}>
          <div id="doctorSectionHandlers" className={`${styles["doctor-section-handlers"]}`}>
            <div id="approveDoctors" className={`${styles["btncard"]} ${styles["approve-doctors"]}`}>
              <div className={`${styles["card-body"]}`}>
                Approve Doctors
              </div>
            </div>
            <div id="removeDoctors" className={`${styles["btncard"]} ${styles["remove-doctors"]}`}>
              <div className={`${styles["card-body"]}`}>
                Remove Doctors
              </div>
            </div>
          </div>
          <div id="approveDoctorsContainer" className={`${styles["hide"]}`}>
            <div className={`${styles["card-heading"]}`}>
              <h1>Approve Doctors</h1>
            </div>
            <section id="unApprovedDoctorContainer" className={`${styles["grid"]}`}>
              <InfoCard className={styles} />
              <InfoCard className={styles} />
            </section>
          </div>
          <div id="removeDoctorsContainer" className={`${styles["hide"]}`}>
            <div className={`${styles["card-heading"]}`}>
              <h1>Remove Doctor</h1>
            </div>
            <section className={`${styles["grid"]}`} id="deleteDoctorContainer">
              <InfoCard className={styles} />
              <InfoCard className={styles} />
            </section>
          </div>
        </div>
      </div>
      {/* <div className={`${styles["grid"]}`}>
      </div> */}
    </div>
  );
};

export default Admin;
