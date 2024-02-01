import { useState } from "react";

export default function CommentForm(){
    let [formData,setFormData] = useState({
        username:"",
        comment:"",
        rating:5
    });

    let handleInputChange = (event)=>{
            setFormData((currData)=>{
                return {...currData,[event.target.name]: event.target.value};
            });
    };
    let handleSubmit = (event)=>{
            event.preventDefault();
            console.log(formData);
            setFormData({
                username:"",
                comment:"",
                rating:5
            });
    };
    return ( <form onSubmit={handleSubmit}>

            <h3>Comments for reviews</h3>

            {/* <label htmlFor="username">Enter Username:-</label> */}
            <input type="text" name="username" value={formData.username}  id="username" placeholder="Username" onChange={handleInputChange} />
            <br /><br />

            {/* <label htmlFor="remark">Enter Comments:-</label> */}
            <textarea name="comment" id="remark" value={formData.comment} cols="25" rows="5" placeholder="please Commens" onChange={handleInputChange}></textarea>
            <br /><br />

            {/* <label htmlFor="reting">Rating:-</label> */}
            <input type="number" name="rating" id="reting" value={formData.rating} min={1} max={5} onChange={handleInputChange}/>
            <br /><br />

            <button>submit</button>
    </form>
 );
}