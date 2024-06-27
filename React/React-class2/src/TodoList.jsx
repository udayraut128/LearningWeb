import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task:"sample-task",id:uuidv4(),isDone:false}]);
    let [newTodo ,setNewTodo] =useState("");
    let addNewTask = () => {
        // setTodos([...todos,{task:newTodo, id:uuidv4(),isDone:false}]);
        setTodos((prevTodos)=> {
            return [...prevTodos,{task:newTodo, id:uuidv4()}];
        } )

        setNewTodo("");
    }
let updateTodoValue = (event) =>{
    setNewTodo(event.target.value);
}


let deleteTodo = (id) =>{
    let copy = todos.filter((todo) => todo.id != id);
    setTodos((prevTodos) =>  todos.filter((prevTodos) => prevTodos.id != id));
};

// let upperCaseAll = () => {
// setTodos( (prevTodos) => (
//  prevTodos.map((todo) => {
//         return {
//             ...todo,
//             task: todo.task.toUpperCase(),
//         };
//     })
// ));
// };

let markkAllDone = () => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) => {
      return {
        ...todo,
         isDone: true,
      };
    })
  );
};

// let upperCaseOne = (id) =>{
// setTodos((prevTodos) =>
//   prevTodos.map((todo) => {
//     if(todo.id == id){    
//     return {
//       ...todo,
//       task: todo.task.toUpperCase(),
//     };
// }
// else{
//     return todo;
// }
//   })
// );
// };


let markAsDone = (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          isDone:true,
        };
      } else {
        return todo;
      }
    })
  );
};
    return (
      <div>
        <input
          placeholder="add task"
          value={newTodo}
          onChange={updateTodoValue}
        ></input>
        <button onClick={addNewTask}>Add Task</button>
        <br></br>
        <br></br>
        <h3>ToDo List</h3>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span style={todo.isDone ? { textDecorationLine:"line-through" } : {}}>
                {todo.task}
              </span>
              &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              {/* <button onClick={() => upperCaseOne(todo.id)}>UpperCase</button> */}
              <button onClick={() => markAsDone(todo.id)}>Done</button>
            </li>
          ))}
        </ul>
        {/* <button onClick={upperCaseAll}>Update</button> */}{" "}
        <button onClick={markkAllDone}>Update</button>
      </div>
    );
}