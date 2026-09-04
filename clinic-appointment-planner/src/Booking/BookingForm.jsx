import { useState } from "react";
import FacialTreatments from "../logo-pictures/FacialTreatment.jpg";
import Service from "./Services.jsx";

export default function BookingForm({ onBook }) {
  const [cases, setCase] = useState(false);
  const [data, setData] = useState({
    name: "",
    services: "",
    age: "",
    appointment: "",
    condition: "",
  });

  const serviceOptions = [
    {
      id: 1,
      name: "Facial Treatment",
      price: 1000,
      image: FacialTreatments,
    },
    {
      id: 2,
      name: "Skin Consultation",
      price: 1000,
      image: null,
    },
    {
      id: 3,
      name: "Laser Treatment",
      price: 1200,
      image: null,
    },
    {
      id: 4,
      name: "Body Treatment",
      price: 1200,
      image: null,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const age = parseInt(data.age, 10);
    if (age < 18) {
      alert("You are not qualified to be using this form");
      return;
    }

    onBook(data);

    setData({
      name: "",
      services: "",
      age: "",
      appointment: "",
      condition: "",
    });

    setCase(true);
    e.preventDefault();
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1 id="BookingForm">Booking Form</h1>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={data.name}
            placeholder="write your name here"
            TabIndex={0}
            onChange={handleChange}
          />
          <br></br>

          <label htmlFor="age">Age: </label>
          <input
            id="age"
            type="number"
            name="age"
            value={data.age}
            TabIndex={0}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="services">Services: </label>
          <Service
            options={serviceOptions}
            value={data.services}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="appointment">Appointment: </label>
          <input
            id="appointment"
            value={data.appointment}
            type="date"
            name="appointment"
            onChange={handleChange}
            TabIndex={0}
          />
          <div style={{ marginBottom: "20px" }}></div>

          <label htmlFor="condition">Condition: </label>
          <textarea
            placeholder="place your condition here"
            id="condition"
            value={data.condition}
            name="condition"
            onChange={handleChange}
            TabIndex={0}
          />
          <br></br>
          <label htmlFor="submit"></label>
          <br></br>
          <p>{cases ? "Already Submitted" : "Please Sign In"}</p>

          <button id="Button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
