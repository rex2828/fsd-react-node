import React from 'react';
import style from "../css/About.module.css";
import 'react-bootstrap';
import Headi from "../components/Header";
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Headi/>
            <section id={style.mainContainer}>
                <div className={style.cc}>
                    <h1>Our team members</h1>
                </div>
                <div className={style.main}>
                    <div className={style.profileCard}>
                        <div className={style.img}><img
                            src="https://thumbs.dreamstime.com/b/boy-face-avatar-profile-picture-afroamerican-smiling-cartoon-character-portrait-vector-illustration-graphic-design-149739088.jpg"
                            alt="" srcSet="" /></div>
                        <div className={style.caption}>
                            <h3>Sudeep Gangwar</h3>
                            <ul className={style.sci}>
                                <li>
                                    <a href="/*"><i className="fa-brands fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.profileCard}>
                        <div className={style.img}><img
                            src="https://thumbs.dreamstime.com/b/boy-face-avatar-profile-picture-afroamerican-smiling-cartoon-character-portrait-vector-illustration-graphic-design-149739088.jpg"
                            alt="" srcSet="" /></div>
                        <div className={style.caption}>
                            <h3>Gulshan Kumar</h3>
                            <ul className={style.sci}>
                                <li>
                                    <a href="/*"><i className="fa-brands fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.profileCard}>
                        <div className={style.img}><img
                            src="https://thumbs.dreamstime.com/b/boy-face-avatar-profile-picture-afroamerican-smiling-cartoon-character-portrait-vector-illustration-graphic-design-149739088.jpg"
                            alt="" srcSet="" /></div>
                        <div className={style.caption}>
                            <h3>Anmol Singh</h3>
                            <ul className={style.sci}>
                                <li>
                                    <a href="/*"><i className="fa-brands fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={style.profileCard}>
                        <div className={style.img}><img
                            src="https://thumbs.dreamstime.com/b/boy-face-avatar-profile-picture-afroamerican-smiling-cartoon-character-portrait-vector-illustration-graphic-design-149739088.jpg"
                            alt="" srcSet="" /></div>
                        <div className={style.caption}>
                            <h3>Nitigya joshi</h3>
                            <ul className={style.sci}>
                                <li>
                                    <a href="/*"><i className="fa-brands fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.profileCard}>
                        <div className={style.img}><img
                            src="https://thumbs.dreamstime.com/b/boy-face-avatar-profile-picture-afroamerican-smiling-cartoon-character-portrait-vector-illustration-graphic-design-149739088.jpg"
                            alt="" srcSet="" /></div>
                        <div className={style.caption}>
                            <h3>Aryan Verma</h3>
                            <ul className={style.sci}>
                                <li>
                                    <a href="/*"><i className="fa-brands fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.area}>
                    <ul className={style.circles}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default About;