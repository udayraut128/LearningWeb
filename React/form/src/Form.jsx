import { useState } from "react"

export default function Form(){

    // let [fullName,setFullName] = useState("uday");
    // let [userName, setUserName] = useState("uday");

    // let handleNameChange = (event) =>{
        // console.log(event.target.value);
    //     setFullName(event.target.value);
    // }
    // let handleuserNameChange = (event) => {
      // console.log(event.target.value);
    //   setUserName(event.target.value);
    // };

    let handleFormChange = (event) => {
        setFormData(event.target.value);
    }
let [formData, setFormData] = useState({
        fullName:"",
        username:"",
        password:""
    });



    // let handleSubmit =(event) =>{
    //     event.preventDefault();
    //     console.log(formData);
    //     setFormData({
    //       fullName: "",
    //       username: "",
    //       password: ""
    //     });
        
    // };

    return (
      //   <form>
      //     <label htmlFor="fullname">Name:</label>
      //     <input
      //       type="text"
      //       placeholder=" Enter FullName"
      //       name="fullname"
      //       id="fullname"
      //       value={fullName}
      //       onChange={handleNameChange}
      //     />
      //     <br></br>
      //     <br></br>
      //     <label htmlFor="username">UserName</label>
      //     <input
      //       type="text"
      //       placeholder="Enter UserName"
      //       name="username"
      //       id="username"
      //       value={userName}
      //       onChange={handleuserNameChange}
      //     />
      //   </form>

      <form>
        <label htmlFor="fullName">FullName: </label>
        <input
          placeholder="Enter Full Name"
          id="fullName"
          value={formData.fullName}
          onChange={handleFormChange}
        ></input>
        <br></br>

        <label htmlFor="username">UserName: </label>
        <input
          placeholder="Enter UserName"
          id="username"
          value={formData.username}
          onChange={handleFormChange}
        ></input>
        <br></br>

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          value={formData.password}
          onChange={handleFormChange}
        ></input>
        <br></br>
        <br></br>
        <button>Sumbit</button>
      </form>
    );
}