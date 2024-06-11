import {useState} from "react";
export default function Counter(){
    // let [stateVariable , setStateVariable] = useState(0);
    let [count ,setCount] = useState(0);//initialization

    
    // function inCount(){
        // count=count+1;\
    //     setCount(count+1);
    //     console.log(count);
    // }

     let inCount =() => {
       
       setCount((currCount) =>{
        return currCount +1;
       });
        setCount((currCount) => {
          return currCount +1;
        });

     };

    return(
        <div>
            <h3>Count ={count}</h3>
            <button onClick={inCount}>Count</button>
        </div>
    );
}