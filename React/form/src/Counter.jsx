import {useState,useEffect} from "react";

export default function Counter (){




let [countx,setCountx] =useState(0);
let [county, setCounty] = useState(0);
    let incCountx =()=>{
        setCountx((currCount)=>currCount+1);
    };

     let incCounty = () => {
       setCounty((currCount) => currCount + 1);
     };

useEffect(
  function print() {
    console.log("useEffect");
  },
  [countx]
);

    return (
      <div className="counter">
        <h1>Counter{countx}</h1>
        <button onClick={incCountx}>Count</button>
        <h1>Counter{county}</h1>
        <button onClick={incCounty}>Count</button>
      </div>
    );
}