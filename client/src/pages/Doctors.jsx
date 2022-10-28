import React from 'react'
import styles from '../css/Doctors.module.css'
import Doctor from '../components/Doctor'
import { useState } from 'react'
import { useEffect } from 'react'

const Doctors = () => {

    const [fetchedDoctors, setFetchedDoctors] = useState([])
    const [renderedDoctors, setRenderedDoctors] = useState([])
    const [location, setLocation] = useState('')
    const [sortBy, setSortBy] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetchDoctors()
    }, [])

    useEffect(() => {
        let doctors = fetchedDoctors.filter((doctor) => {
            return (location === doctor.clinicaddress.split(',')[0] || location === '' || location === 'Select Location')
        })
        if (sortBy === 'Rating') {
            doctors.sort((a, b) => b.rating - a.rating)
        }
        if (sortBy === 'Consultation Fee') {
            doctors.sort((a, b) => a.fee - b.fee)
        }
        doctors = doctors.filter((doctor) => {
            return doctor.name.toLowerCase().includes(search) || doctor.edu.toLowerCase().includes(search) || doctor.category.toLowerCase().includes(search);
        })
        setRenderedDoctors(doctors)
    }, [fetchedDoctors, location, sortBy, search])


    const fetchDoctors = async () => {
        const response = await fetch('http://localhost:3000/api/doctors/getdoctors')
        setFetchedDoctors(await response.json())
    }

    return (
        <div className={`container ${styles.doctorlistContainer}`}>
            <div className = "row">
                <div className = {`col-lg-12 ${styles.cardMargin}`}>
                    <div className = {`card ${styles.searchForm}`}>
                        <div className = "card-body p-0">
                            <form className={styles.searchForm}>
                                <div className="row">
                                    <div className = "col-lg-3 col-md-3 col-sm-12 p-0">
                                        <select className = "form-control" value = {location} onChange={(e) => setLocation(e.target.value)}>
                                            <option>Select Location</option>
                                            <option>Bengaluru</option>
                                            <option>Mumbai</option>
                                            <option>Delhi</option>
                                            <option>Kolkata</option>
                                            <option>Chennai</option>
                                        </select>
                                    </div>
                                    <div className = "col-lg-9 col-md-6 col-sm-12 p-0 search-bar">
                                        <input type="text" placeholder="Search..." className = "form-control" id="search" style={{}}
                                            name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-12">
                    <div className={`card ${styles.cardMargin}`}>
                        <div className = "card-body">
                            <div className={`row ${styles.searchBody}`}>
                                <div className = "col-lg-12">
                                    <div className = "search-result">
                                        <div className = {styles.resultHeader}>
                                            <div className = "row">
                                                <div className = "col-lg-6">
                                                    <div className = {styles.records}>Showing :&nbsp;
                                                        <span><b>{renderedDoctors.length}</b></span> results
                                                    </div>
                                                </div>
                                                <div className = "col-lg-6">
                                                    <div className = {styles.resultActions}>
                                                        <div className = {styles.resultSorting}>
                                                            <span>Sort By:</span>
                                                            <select className = "form-control border-0" id="sort-selector" value = {sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                                                <option>None</option>
                                                                <option>Rating</option>
                                                                <option>Consultation Fee</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "result-body">
                                            <div className = "table-responsive">
                                                <table className={`table ${styles.doctorTable}`}>
                                                    <tbody>
                                                        {
                                                            renderedDoctors?.map((doctor) => <Doctor key = {doctor._id} doctor = {doctor}/>)
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctors