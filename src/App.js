import "./App.css"
import React from "react";
import Todos from "./components/Todos";
import DisplayTodos from './components/DisplayTodos';


//  Made use of DisplayTodos to display initial state and any other tasks added
//Todos comp is needed to add more tasks
const App = () => {
  return (
    <>
      <Todos />
      <DisplayTodos />
    </>
  );
};

export default App;

//This app is largely based on assistance from mentors Chad and Kyle from HyperionDev
//Thank you for the guidance  
