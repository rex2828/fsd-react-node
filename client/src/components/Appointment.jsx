import React from 'react'

const Appointment = (app) => {

  return (
    <div style={{padding: "10px"}}>
        <div>Name: {app.props.doctor.name}</div>
        <div>Appointment Date: {app.props.appointmentDate}</div>
        <div>Appointment Time: {app.props.appointmentTime}</div>
        <hr />
    </div>
  )
}

export default Appointment