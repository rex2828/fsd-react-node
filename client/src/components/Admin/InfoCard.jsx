import { CheckmarkSVG, TrashSVG } from "../../svg/svg";

function InfoCard(props) {

  return (
    <div className={`${props.className["card"]} ${props.className["doctor"]} ${props.className["active"]}`}>
      <div className={`${props.className["content"]}`}>
        <div className={`${props.className["post"]} ${props.className["main"]}`}>
          <div className={`${props.className["preview"]}`}></div>
          <div className={`${props.className["counter"]}`}></div>
          <div className={`${props.className["detail"]}`}></div>
          <div className={`${props.className["detail"]}`}></div>
          <div className={`${props.className["details"]}`}></div>
          <div className={`${props.className["details"]}`}></div>
        </div>
        <div className={`${props.className["post"]} ${props.className["sec"]}`}>
          <div className={`${props.className["preview"]}`}></div>
          <div className={`${props.className["counter"]}`}></div>
          <div className={`${props.className["detail"]}`}></div>
        </div>
        <div className={`${props.className["post"]} ${props.className["sec"]}`}>
          <div className={`${props.className["preview"]}`}></div>
          <div className={`${props.className["counter"]}`}></div>
          <div className={`${props.className["detail"]}`}></div>
        </div>
        <div className={`${props.className["post"]} ${props.className["ter"]}`}>
          <div className={`${props.className["preview"]}`}></div>
          <div className={`${props.className["counter"]}`}></div>
          <div className={`${props.className["detail"]}`}></div>
        </div>
        <div className={`${props.className["post"]} ${props.className["ter"]}`}>
          <div className={`${props.className["preview"]}`}></div>
          <div className={`${props.className["counter"]}`}></div>
          <div className={`${props.className["detail"]}`}></div>
        </div>
        <div className={`${props.className["post"]} ${props.className["ter"]}`}>
          <div className={`${props.className["preview"]}`}></div>
          <div className={`${props.className["counter"]}`}></div>
          <div className={`${props.className["detail"]}`}></div>
        </div>
        <div className={`${props.className["post"]} ${props.className["ter"]}`}>
          <div className={`${props.className["preview"]}`}></div>
          <div className={`${props.className["counter"]}`}></div>
          <div className={`${props.className["detail"]}`}></div>
        </div>
        <div className={`${props.className["post"]} ${props.className["ter"]}`}>
          <div className={`${props.className["preview"]}`}></div>
          <div className={`${props.className["counter"]}`}></div>
          <div className={`${props.className["detail"]}`}></div>
        </div>
        <div className={`${props.className["post"]} ${props.className["ter"]}`}>
          <div className={`${props.className["preview"]}`}></div>
          <div className={`${props.className["counter"]}`}></div>
          <div className={`${props.className["detail"]}`}></div>
        </div>
      </div>
      <div className={`${props.className["fabs"]}`}>
        <div className={`${props.className["fab"]}`}></div>
        <i className={`${props.className["avatar"]} zmdi zmdi-account`}></i>
      </div>
      <div className={`${props.className["user"]}`}>
        <div className={`${props.className["socials"]}`}>
          <div style={{"fontSize": "20px", "fontStyle": "bold"}}>{props.doctor.name}</div>
          {/* <div className={`${props.className["social"]}`}></div>
          <div className={`${props.className["social"]}`}></div>
          <div className={`${props.className["social"]}`}></div> */}
        </div>
        <div className={`${props.className["profiles"]}`}>
          <div className={`${props.className["profile"]}`}>
            <span>Rating</span>
            <p className={`${props.className["doctor-rating"]}`}>{props.doctor.rating}</p>
          </div>
          <div className={`${props.className["profile"]}`}>
            <span>Fee</span>
            <p className={`${props.className["doctor-fee"]}`}>{props.doctor.fee}</p>
          </div>
          <div className={`${props.className["profile"]}`}>
            <span>Category</span>
            <p className={`${props.className["doctor-category"]}`}>{props.doctor.category}</p>
          </div>
          <div className={`${props.className["profile"]}`}>
            <span>Experience</span>
            <p className={`${props.className["doctor-exp"]}`}>{props.doctor.experience}</p>
          </div>
          {/* <div className={`${props.className["profile"]}`}>
            <span>City</span>
            <p className={`${props.className["doctor-city"]}`}>{props.doctor.clinicaddress.split(',')[0]}</p>
          </div>
          <div className={`${props.className["profile"]}`}>
            <span>State</span>
            <p className={`${props.className["doctor-state"]}`}>{props.doctor.clinicaddress.split(',')[1]}</p>
          </div> */}
        </div>
        <div className={`${props.className["buttons"]}`}>
          <button className={`${props.className["approve"]}`}>
            <div className={`${props.className["tooltip"]}`}>Approve Doctor</div>
            <CheckmarkSVG className={`${props.className["svg"]}`} />
          </button>
          <button className={`${props.className["delete"]}`}>
            <div className={`${props.className["tooltip"]}`}>Delete Doctor</div>
            <TrashSVG className={`${props.className["svg"]}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
