import React from 'react';
import classes from '../css/Header.module.css';
const Header = (props) => {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.headerHeading}>Vaidya Healthcare</div>
            <div className={classes.currentWeek}>{props.currentDay.toDateString()} - {(new Date(props.currentDay.getTime() + 6 * 1000 * 60 * 60 * 24)).toDateString()}</div>
            <div className={classes.headerControllers}>
                <button className={classes.controllerButtons} onClick={props.prevButtonHandler}>Prev</button>
                <button className={classes.controllerButtons} onClick={props.nextButtonHandler}>Next</button>
            </div>
        </div>
    )
}

export default Header;