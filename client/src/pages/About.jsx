import React from 'react'
import style from "../css/About.module.css"
const About = () => {
  return (
    <section id={style.mainContainer}>
        <div className={style.cc}>
            <h1>Our team members</h1>
        </div>
        <div className={style.main}>
            <div className={style.profileCard}>
                <div className={style.img}><img
                        src="https://thumbs.dreamstime.com/b/boy-face-avatar-profile-picture-afroamerican-smiling-cartoon-character-portrait-vector-illustration-graphic-design-149739088.jpg"
                        alt="" srcset="" /></div>
                <div className={style.caption}>
                    <h3>Sudeep Gangwar</h3>
                    <ul className={style.sci}>
                        <li>
                            <a href="/*"><i class="fa-brands fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.profileCard}>
                <div className={style.img}><img
                        src="https://thumbs.dreamstime.com/b/boy-face-avatar-profile-picture-afroamerican-smiling-cartoon-character-portrait-vector-illustration-graphic-design-149739088.jpg"
                        alt="" srcset="" /></div>
                <div className={style.caption}>
                    <h3>Nitigya Joshi</h3>
                    <ul className={style.sci}>
                        <li>
                            <a href="/*"><i class="fa-brands fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.profileCard}>
                <div className={style.img}><img
                        src="https://thumbs.dreamstime.com/b/boy-face-avatar-profile-picture-afroamerican-smiling-cartoon-character-portrait-vector-illustration-graphic-design-149739088.jpg"
                        alt="" srcset="" /></div>
                <div className={style.caption}>
                    <h3>Anmol Singh</h3>
                    <ul className={style.sci}>
                        <li>
                            <a href="/*"><i class="fa-brands fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={style.profileCard}>
                <div className={style.img}><img
                        src="https://thumbs.dreamstime.com/b/boy-face-avatar-profile-picture-afroamerican-smiling-cartoon-character-portrait-vector-illustration-graphic-design-149739088.jpg"
                        alt="" srcset="" /></div>
                <div className={style.caption}>
                    <h3>Nitigya joshi</h3>
                    <ul className={style.sci}>
                        <li>
                            <a href="/*"><i class="fa-brands fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.profileCard}>
                <div className={style.img}><img
                        src="https://thumbs.dreamstime.com/b/boy-face-avatar-profile-picture-afroamerican-smiling-cartoon-character-portrait-vector-illustration-graphic-design-149739088.jpg"
                        alt="" srcset="" /></div>
                <div className={style.caption}>
                    <h3>Aryan Verma</h3>
                    <ul className={style.sci}>
                        <li>
                            <a href="/*"><i class="fa-brands fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About