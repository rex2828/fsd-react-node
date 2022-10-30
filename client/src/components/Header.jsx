import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <header className="main_menu home_menu menu_fixed">

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12" data-aos="fade-down" data-aos-duration="1300">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link to="/" className="navbar-brand">
                                <img className='header_img' src={require(
                                    // @ts-ignore
                                    "../img/logo.png")} alt="logo" />
                            </Link>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse main-menu-item justify-content-center"
                                id="navbarTogglerDemo02">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" id="home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/doctors">Doctors</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/book">Appointment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link className="btn_2 d-lg-block ms-auto mt-3 mx-2" id="login-register-btn"
                                            to="/login">Login/Register</Link>
                                    </li>
                                    <li>
                                        <Link className="btn_2 d-lg-block ms-auto mt-3" id="logout-btn" to="/login">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    );
}
