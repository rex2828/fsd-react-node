import React from "react";
import { SearchSVG, PersonCircleSVG, AddCircleSVG, CloseCircleSVG } from "../svg/svg";

import AdminNav from "../components/Admin/AdminNav";
import InfoCard from "../components/Admin/InfoCard";
import styles from "../css/Admin.module.css";

import logo from "../img/logo.png";

function Admin() {

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div className={`${styles["admin"]}`}>
      <AdminNav className={styles} logo={logo} />
      <div className={`${styles["page-content"]}`}>
        <section className={`${styles["search-and-user"]}`}>
          <form onSubmit={submitHandler}>
            <input type="search" placeholder="Search Pages..." />
            <button type="submit" aria-label="submit form">
              <SearchSVG className={`${styles["svg"]}`} />
            </button>
          </form>
          <div className={`${styles["admin-profile"]}`}>
            <span className={`${styles["greeting"]}`}>Admin</span>
            <div className={`${styles["notifications"]}`}>
              <span className={`${styles["badge"]}`}>1</span>
              <PersonCircleSVG className={`${styles["svg"]}`} />
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
                <AddCircleSVG className={`${styles["svg"]}`} />
                Approve Doctors
              </div>
            </div>
            <div id="removeDoctors" className={`${styles["btncard"]} ${styles["remove-doctors"]}`}>
              <div className={`${styles["card-body"]}`}>
                <CloseCircleSVG className={`${styles["svg"]}`} />
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
