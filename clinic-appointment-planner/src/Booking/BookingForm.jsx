import {useState} from "react"

export default function BookingForm(){
    const [cases, setCase]= useState(false);
    const [data, setData]= useState({
        name:"",
        birthdate: "",
        age: "",
        address: "",
        condition: ""

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
        
        setCase(true);
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
    TabIndex={0}
    onChange = {handleChange}/>
<br></br>
    <label htmlFor = "birthdate">Birthdate: </label>
    <input
    id ="birthdate"
    value={data.birthdate}
    type= "date"
    name = "birthdate"
    onChange ={handleChange}
    TabIndex={0}
    />
     <br></br>
    <label htmlFor = "address">Address: </label>
    <input
    id ="address"
    value={data.address}
    type= "address"
    name = "address"
    onChange ={handleChange}
    TabIndex={0}
    />
     <div style={{ marginBottom: "20px" }}></div>

     <label htmlFor = "condition">Condition: </label>
    <textarea placeholder="place your condition here"
    id = "condition"
    value={data.condition}
    name = "condition"
    onChange={handleChange}
    TabIndex={0}/>
    <br></br>
     <label htmlFor= "submit"></label>
     <br></br>
     <p>
    {cases ? "Already Submitted" : "Please Sign In"}
   </p>
   
    <button id ="Button" type="submit">Submit</button>

    
    </form>
    </div>
    </>)
}