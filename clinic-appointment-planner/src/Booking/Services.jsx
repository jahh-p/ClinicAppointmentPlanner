import {useState} from "react"
import FacialTreatment from "./assets/FacialTreatment.jpg"
export default function Services(){
  
   const listOfService =[{
  id:1,
  name: "Facial Treatment",
  image: {FacialTreatment}
   }]
     
    return(<div>
        {listOfService.map(function(items){
            return(
            <div>
                <h1>id: {items.id}</h1>)
                <p>Treatment: {items.name}</p>
                <img src={items.image}/>
                </div>
            )
        })}
    </div>)
}