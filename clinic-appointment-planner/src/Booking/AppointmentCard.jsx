export default function AppointmentCard({ appointments }) {
  return (
    <div className="appointment-card">
      <h3>Appointment Card</h3>

      {!appointments ? (
        <p>has not yet booked an appointment</p>
      ) : (
        <>
          <p><strong>Name:</strong> {appointments.name}</p>
          <p><strong>Services:</strong> {appointments.services}</p>
          <p><strong>Age:</strong> {appointments.age}</p>
          <p><strong>Appointment:</strong> {appointments.appointment}</p>
          <p><strong>Condition:</strong> {appointments.condition}</p>
        </>
      )}
    </div>
  );
}