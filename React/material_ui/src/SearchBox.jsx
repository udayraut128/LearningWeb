import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './SearchBox.css'

export default function SearchBox() {
 let [city, setCity] = useState("");
const API_URL =
  "http://api.openweathermap.org/geo/1.0/direct";
const API_KEY = "1589c8d4116de1efcc97800defd0abaa";

let getWeatherInfo = async () =>{
    let response=await fetch(`${API_URL}?q=${city},456001,&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result ={
        temp:jsonResponse.main.temp,
        temMin:jsonResponse.main.tem_min,
    }
    console.log(jsonResponse);
};

     

    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = (event) => {
       event.preventDefault();
       console.log(city);
       setCity("");
       getWeatherInfo();
    };


  return (
    <div className="search-box">
      <h2>Search for the Weather</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          id="city"
          label="City Name"
          variant="outlined"
          required
        />
  
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
