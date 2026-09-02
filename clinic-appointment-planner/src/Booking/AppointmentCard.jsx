import {useState} from "react"
import BookingForm from "./BookingForm.jsx"

export default function AppointmentCard(props){
    
    function display(){

        if(!props.appointments){
            {<p>has not yet booked an appointment</p>}
        }
        
        else{
            {  <p><strong>name:</strong> {props.appointments.name}</p>}
            {<p><strong>services:</strong> {props.appointments.services}</p>}
           { <p><strong>age:</strong> {props.appointments.age}</p>}
            {<p><strong>appointment:</strong> {props.appointments.appointment}</p>}
            {<p><strong>condition:</strong> {props.appointments.condition}</p>}

    }

    return(<>
    <p>{display}</p>
    </>)
}