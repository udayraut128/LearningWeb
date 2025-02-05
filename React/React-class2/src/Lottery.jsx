import { useState } from "react";
import { genTicket} from "./helper.js";
import Ticket from "./Ticket.jsx";
 
 

 

export default function Lottery({ n = 3, winningSum = 15 }) {
  const [ticket, setTicket] = useState(genTicket(n));
  const [isWinning, setIsWinning] = useState(sum(ticket) === winningSum);

  const buyTicket = () => {
    const newTicket = genTicket(n);
    setTicket(newTicket);
    setIsWinning(sum(newTicket) === winningSum);
  };

  function sum(ticket) {
    return ticket.reduce((acc, num) => acc + num, 0);
  }

  return (
    <div className="lottery">
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy</button>
      {isWinning && <h2>Congratulations, you win!</h2>}
    </div>
  );
}
