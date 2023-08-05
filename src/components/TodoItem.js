import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos, updateTodos, completeTodos } from "../redux/reducer";
import {
  PencilSquare,
  CheckSquare,
  CheckSquareFill,
  XSquare,
} from "react-bootstrap-icons";

//Each todo item will be returned with a status, delete and edit icon
//these elements are imported as props 

const TodoItem = (props) => {
  const getState = useSelector((state) => state.data);
  //.entries method returns an array with both key/value pairs
  const stateDataArray = Object.entries(getState);

  const dispatch = useDispatch();

  //handlers will help with dispatching actions to reducer

  //user will be promted to provide new todo item
  const updateItem = () => {
    let userChange = prompt(`Please input new ToDo item:`);
    if (userChange !== null && userChange.trim() !== "") {
      let addData = { id: props.id, content: userChange };
      dispatch(updateTodos(addData));
    } else {
      alert("No changes made. Task content remains the same.");
    }
  };

  const removeItem = () => {
    let userInput = prompt(`You are about to delete a task?\nInput "No" to cancel`);
    if (userInput === "No") {
      alert("Task not deleted");
    } else {
      alert("Task deleted");
      //cloned initial state data as changes should be immutable
      let stateArray = [...stateDataArray];
      //using for loop to remove data object based on ID
      for (let i = 0; i < stateArray.length; i++) {
        if (stateArray[i][0] === props.id) {
          stateArray.splice(i, 1);
        }
      }
      //array is transformed to an object then returned to store state
      let stateObj = Object.fromEntries(stateArray);
      dispatch(removeTodos(stateObj));
    }
  };

  //below handler updates status of completed todo items
  const completeItem = () => {
    let completed;
    if (props.status === false) {
      alert("Task completed!");
      completed = { id: props.id, content: props.content, completed: true };
    } else {
      alert("Task added back to incomplete list.");
      completed = { id: props.id, content: props.content, completed: false };
    }
    dispatch(completeTodos(completed));
  };

  //below handler will update status icon 
  const statusButton = () => {
    if (props.status) {
      return (
        <button
          className="todo-icons"
          onClick={() => completeItem()}
        >
          <CheckSquareFill />
        </button>
      );
    } else {
      return (
        <button className="todo-icons" onClick={() => completeItem()}>
          <CheckSquare />
        </button>
      );
    }
  };

  return (
    <div>
      {statusButton()}
      <button className="todo-icons" onClick={() => updateItem()}>
        <PencilSquare />
      </button>
      <button className="todo-icons" onClick={() => removeItem()}>
        <XSquare />
      </button>
    </div>
  );
};

export default TodoItem;

//How to Filter an Object by Key in JavaScript, Stack Abuse, retrieved on 14 June 2023 from https://stackabuse.com/how-to-filter-an-object-by-key-in-javascript/
