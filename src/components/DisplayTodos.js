// import React, { useState } from "react";
// import { connect } from "react-redux";
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

//Below component 
//array is mapped to provide prop details for TodoItem component
//each task item has a unique key ID


function DisplayTodos() {

  const getState = useSelector((state) => (state.data));

  //turn state objects into an array
  const stateEntries = Object.entries(getState);

  return (
      <div className="all-tasks">
          {              
              stateEntries.map((task) => {
                  return (
                      <div key={task[0]} className="task-item">
                          <h2 className="task-header">{task[1].content}</h2>
                          <TodoItem id={task[0]} status={task[1].completed} content={task[1].content}/>
                      </div>
                  )

              })
          }
      </div>
  )
};

export default DisplayTodos;