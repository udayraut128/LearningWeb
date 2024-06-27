import { useState } from "react";


export default function LudoBox(){
    // let [blueMove , setBlueMove] = useState(0);
    let [moves , setMoves] =useState ({blue:0, red:0, yellow:0,green:0});

    let updateBlue=() =>{
        // moves.blue+=1;
        // setMoves({...moves,blue:moves.blue +1}); //spred value pass 
        setMoves((prevMoves) =>{
            return {...prevMoves, blue:prevMoves.blue +1}
        });
    }

     let updateYellow = () => {
       setMoves((prevMoves) => {
         return { ...prevMoves, yellow: prevMoves.yellow + 1 };
       });
     };
      let updateGreen = () => {
        setMoves((prevMoves) => {
          return { ...prevMoves, green: prevMoves.green + 1 };
        });
      };
       let updateRed = () => {
         setMoves((prevMoves) => {
           return { ...prevMoves, red: prevMoves.red + 1 };
         });
       };



    return (
      <div className="board">
        <p>Game Board</p>
        <div>
          <p>Blue moves={moves.blue}</p>
          <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>
            +1
          </button>

          <p>Green moves={moves.green}</p>
          <button onClick={updateGreen} style={{ backgroundColor: "green" }}>
            +1
          </button>

          <p>Yellow moves={moves.yellow}</p>
          <button onClick={updateYellow} style={{ backgroundColor: "yellow" }}>
            +1
          </button>

          <p>Red moves={moves.red}</p>
          <button onClick={updateRed} style={{ backgroundColor: "red" }}>
            +1
          </button>
        </div>
      </div>
    );
}