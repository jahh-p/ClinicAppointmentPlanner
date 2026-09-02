import { useState } from "react";

export default function BookingForm({onBook}) {
  const [cases, setCase] = useState(false);
  const [data, setData] = useState({
    name: "",
    services: "",
    age: "",
    appointment: "",
    condition: "",
  });

  const serviceOptions = [
    "Facial Treatment",
    "Skin Consultation",
    "Laser Treatment",
    "Body Treatment",
  ];


  function handleSubmit(e) {
    e.preventDefault();
    const age = parseInt(data.age, 10);
    if (age < 18) {
      alert("You are not qualified to be using this form");
      return;
    }
    
    onBook(data)

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
          <select value={data.services} name = "services" onChange ={handleChange}>
            <option value="services">--Select Specific Service--</option>
            {serviceOptions.map(function(s){
                return(
                    <option key={s} value={s}>{s}</option>
                )
            })}
          </select>
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
