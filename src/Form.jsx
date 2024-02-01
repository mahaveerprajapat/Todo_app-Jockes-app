import { useState } from "react";

export default function Form(){
    let [formData,setFormData] = useState({
        fullname: "",
        username: "",
        password:""
    })

    let handleInputChange = (event)=>{
            
            setFormData((currData)=>{
                return {...currData,[event.target.name]: event.target.value };
            });
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullname: "",
            username: "",
            password: ""
        })

    }
    return( <form onSubmit={handleSubmit}>
        <label htmlFor="Fullname">Enter Full Name:</label>
        <input onChange={handleInputChange}
         type="text"
          placeholder="enter full name:"
           value={formData.fullname}
           id="Fullname"
           name="fullname"
        />
        <br /><br />

        <label htmlFor="Username">Enter Username:</label>
        <input onChange={handleInputChange}
         type="text"
          placeholder="enter Username:"
           value={formData.username}
           id="Username"
           name="username"
        />
        <br /><br />
        <label htmlFor="password">Enter password:</label>
        <input onChange={handleInputChange}
         type="password"
          placeholder="enter password:"
           value={formData.password}
           id="password"
           name="password"
        />
        <br /><br />
        <button>submit</button>
    </form> );
}