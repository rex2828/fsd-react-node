import React from 'react'
import styles from '../css/Doctors.module.css'
const Doctor = ({doctor}) => {



    return (
        <tr>
            <td>
                <div className={styles.doctorTableImg}>
                    <img src={doctor.pic} alt='pp' />
                </div>
            </td>
            <td>
                <div className={styles.doctorTableName}>
                    <a href="/doctorprofile">{doctor.name}</a>
                    <p className="m-0">
                        <span className={`text-muted ${styles.edu}`}>{doctor.edu}</span>
                    </p>
                </div>
            </td>
            <td>
                <div className={styles.doctorTableLocation}>
                    <p className="text-muted m-0">in&nbsp;
                        <span className="location">{doctor.clinicaddress}</span>
                    </p>
                </div>
            </td>
            <td>
                <div className={styles.doctorTableFee}>{doctor.fee}</div>
            </td>
            <td>
                <div className={`${styles.doctorTableJobCategory} ${styles.bgSoftGreen}`}>
                    <span>{doctor.category}</span>
                </div>
            </td>
            <td>
                <div className={styles.doctorTableJobRating}>
                    <span className="text-muted m-0">{doctor.rating}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-star">
                        <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                        </polygon>
                    </svg>
                </div>
            </td>
            <td>
                <button className={styles.btnSuccess}>Book Appointment</button>
            </td>
        </tr>
    )
}

export default Doctor