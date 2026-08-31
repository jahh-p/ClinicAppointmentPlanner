
import logo from "./logo-pictures/logo.jpg"
import Navigation from "./Navigation"
import BookingForm from "./Booking/BookingForm.jsx"

export default function App() {


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
          <BookingForm />
        </div>
      </section>

      <section id="calendar">
        <div
          style={{
            maxWidth: '800px',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <h1>Calendar</h1>
          <p>Calendar view will go here</p>
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
          <p>Patient list will go here</p>
        </div>
      </section>
    </>
  )
}


