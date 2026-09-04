
import logo from "./logo-pictures/logo.jpg"
import Navigation from "./Navigation"
import BookingForm from "./Booking/BookingForm.jsx"
import AppointmentCard from "./Booking/AppointmentCard.jsx"
import {useState} from "react"

export default function App() {
const [appointmentData, setAppointmentData]=useState(null)
function handleBookingSubmit(submittedData){
     setAppointmentData(submittedData)
}
return (
    <>
      <Navigation />
      <div>
        <img
          src={logo}
          alt="clinic logo"
        />
      </div>

      <section id="appointments">
        <div
          style={{
            maxWidth: '600px',
            padding: '400px 900px',
            textAlign: 'top',
          }}
        >
          <h1>Appointments</h1>
          <br></br>
          <p>Appointment scheduling interface will go here</p>
          <BookingForm onBook={handleBookingSubmit}/>
          <br>
          </br>

          <AppointmentCard appointments ={appointmentData}/>
        </div>
      </section>

      <section id="services">
        <div
          style={{
            maxWidth: '800px',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <h1>List Of Services</h1>
          <Services />
        </div>
      </section>

      <section id="patients">
        <div
          style={{
            maxWidth: '800px',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <h1>Patients</h1>
          <p>Patient Placeholder</p>
        </div>
      </section>
    </>
  )
}


