//  import LudoBox from "./LudoBox.jsx"
import './App.css'
import "./TicketNum.css"

// import TodoList from "./TodoList.jsx"
import Lottery from "./Lottery.jsx"
// import Ticket from "./Ticket.jsx"


function App() {
  let winCondition = (ticket) =>{
    return SubmitEvent(ticket)===15;
  }

  return (
    <>
      {/* <LudoBox/> */}
      {/* <TodoList/> */}
      {/* <Lottery/> */}
      {/* <Ticket ticket={[1, 2, 4]} />
      <Ticket ticket={[1, 2,5,5,4, 4]} />
      <Ticket ticket={[1, 2,6,4,2, 4]} /> */}
      <Lottery n={3}  winCondition={winCondition}/>
    </>
  );
}

export default App;
