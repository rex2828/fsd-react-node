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
          <div className={`${props.className["social"]}`}><i className="zmdi zmdi-linkedin-box"></i></div>
          <div className={`${props.className["social"]}`}></div>
          <div className={`${props.className["social"]}`}></div>
          <div className={`${props.className["social"]}`}></div>
        </div>
        <div className={`${props.className["profiles"]}`}>
          <div className={`${props.className["profile"]}`}>
            <span>Rating</span>
            <p className={`${props.className["doctor-rating"]}`}></p>
          </div>
          <div className={`${props.className["profile"]}`}>
            <span>Fee</span>
            <p className={`${props.className["doctor-fee"]}`}></p>
          </div>
          <div className={`${props.className["profile"]}`}>
            <span>Category</span>
            <p className={`${props.className["doctor-category"]}`}></p>
          </div>
          <div className={`${props.className["profile"]}`}>
            <span>Experience</span>
            <p className={`${props.className["doctor-exp"]}`}></p>
          </div>
          <div className={`${props.className["profile"]}`}>
            <span>City</span>
            <p className={`${props.className["doctor-city"]}`}></p>
          </div>
          <div className={`${props.className["profile"]}`}>
            <span>State</span>
            <p className={`${props.className["doctor-state"]}`}></p>
          </div>
        </div>
        <div className={`${props.className["buttons"]}`}>
          <button className={`${props.className["approve"]}`}>
            <div className={`${props.className["tooltip"]}`}>Approve Doctor</div>
            <svg viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M416 128L192 384l-96-96" /></svg>
          </button>
          <button className={`${props.className["delete"]}`}>
            <div className={`${props.className["tooltip"]}`}>Delete Doctor</div>
            <svg viewBox="0 0 512 512"><title>Trash</title><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 112h352" /><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
