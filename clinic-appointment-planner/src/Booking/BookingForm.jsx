import {useState} from "react"

export default function BookingForm(){
    const [data, setData]= useState({
        name:"",
        birthdate: "",
        age: "",
        address: ""

    })
    
    function handleSubmit(e)
    {
      e.preventDefault()
         const age = parseInt(data.age, 10);
        if(age < 18){
        alert("You are not qualified to be using this form")
        return
        }
    
    setData({name:"",
        birthdate: "",
        age: "",
        address: ""})
            e.preventDefault()
    }
    
    function handleChange(e){
     setData({...data, [e.target.name]: e.target.value})
    }
   
    return(<>
    <div>
    <form onSubmit={handleSubmit}>
    <h1 id ="BookingForm">Booking Form</h1>
    <label htmlFor="name">Name:</label>
    <input 
    id="name"
    type ="text"
    name = "name"
    value = {data.name}
    placeholder ="write your name here" 
    TabIndex={0}
    onChange = {handleChange}/>
    <br></br>

    <label htmlFor="age">Age: </label>
    <input id= "age"
    type="number"
    name="age"
    value={data.age}
    onChange = {handleChange}/>
     
    
     <label htmlFor= "submit">Submit Form</label>
    <button id = "submit" type="submit" >submit</button>

    </form>
    </div>
    </>)
}