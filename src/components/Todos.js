import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/reducer";
import { Container } from "react-bootstrap";


//Todo component will return a input field with an add button.
//User input will be captured from input value and addTodo action will be dispatched 

const Todos = () => {
  const dispatch = useDispatch();
  
  const [todo, setTodo] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (todo === "") {
      alert("Input is Empty");
    } else {
      dispatch(addTodos(todo));
      setTodo("");
    }
  };


  return (
    <Container>
    <div className="add-todos">
      <div className="add-todos-header"><h1>My ToDo List</h1></div>
      <div className="todo-input">
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <br/>
      <button className="add-btn" onClick={add}>
        Add
      </button>
      </div>
    </div>
    </Container>
  );
};

export default Todos;
