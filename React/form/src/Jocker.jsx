import {useState,useEffect} from 'react'

export default function Jocker(){
 const URL = "https://official-joke-api.appspot.com/random_joke";

    let [joke,setJoke] =useState({});

 const getNewJoke = async () =>
    {
        let respose =await fetch(URL);
        let jsonResponse =await respose.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
    };

    useEffect(() => async function getFirstJoke(){
        let respose = await fetch(URL);
        let jsonResponse = await respose.json();
         console.log(jsonResponse);
        setJoke({
          setup: jsonResponse.setup,
          punchline: jsonResponse.punchline,
        });
    },[] );

    return (
      <div className="jocker">
        <h3>Jocker</h3>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={getNewJoke}>Click</button>
      </div>
    );
}