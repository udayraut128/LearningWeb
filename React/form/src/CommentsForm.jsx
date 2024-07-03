import { useState } from "react"
export default function CommentsForm(){

    let [formData, setFormData] =useState({
        username:"",
        remark:"",
        rating:5
    });

    let handleInputChange =(event) => {
        setFormData((currDate) =>{
            return{...currDate,[event.target.name]:event.target.value};
        });
    };

    let handleSubmit =(event) =>{
        console.log(formData);
        event.preventDefault();
        setFormData({
             username:"",
        remark:"",
        rating:5
    });
        
    }


    return (
      <div className="comments-form">
        <h3> Give a comment!</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
          <input
            placeholder="username"
            onChange={handleInputChange}
            type="text"
            value={formData.username}
            id="username"
            name="username"

          />
          <br></br>
          <lable htmlFor="remark">Remark:</lable>
          <textarea
            onChange={handleInputChange}
            placeholder="remark"
            type="text"
            value={formData.remark}
            id="remark"
            name="remark"
          ></textarea>
          <br></br>
          <label htmlFor="rating">Rating:</label>
          <input
            onChange={handleInputChange}
            placeholder="rating"
            type="number"
            value={formData.rating}
            min={1}
            max={5}
            id="rating"
            name="rating"
          />
          <br></br>
          <button>Comment</button>
        </form>
      </div>
    );
};