import { MenuSVG, PersonCircleSVG, ArrowBackSVG, ChevronBackSVG, SethoscopeSVG } from "../../svg/svg";

function AdminNav(props) {
    return (
        <header className={`${props.className["page-header"]}`}>
            <nav>
                <button className={`${props.className["toggle-mob-menu"]}`} aria-expanded="false" aria-label="open menu">
                    <MenuSVG className={`${props.className["svg"]}`} />
                </button>
                <ul className={`${props.className["admin-menu"]}`}>
                    <img src={props.logo} alt="logo" />
                    <li className={`${props.className["menu-heading"]}`}>
                        <h3>Admin</h3>
                    </li>
                    <li>
                        <div className={`${props.className["anchor"]}`} id="patientsNavBtn">
                            <PersonCircleSVG className={`${props.className["svg"]}`} />
                            <span>Patient's Data</span>
                        </div>
                    </li>
                    <li>
                        <div className={`${props.className["anchor"]}`} id="doctorsNavBtn">
                            <SethoscopeSVG className={`${props.className["svg"]}`} />
                            <span>Doctor's Data</span>
                        </div>
                    </li>
                    <li>
                        <div className={`${props.className["anchor"]} ${props.className["hide"]}`} id="doctorsNavBtn">
                            <ArrowBackSVG className={`${props.className["svg"]}`} />
                            <span>Back</span>
                        </div>
                    </li>
                    <li>
                        <button className={`${props.className["collapse-btn"]}`} aria-expanded="true" aria-label="collapse menu">
                            <ChevronBackSVG className={`${props.className["svg"]}`} />
                            <span>Collapse</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default AdminNav;