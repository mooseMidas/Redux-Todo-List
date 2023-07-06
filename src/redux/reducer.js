import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = {
  nextId: 2,
  data: { 1: { content: "Content 1", completed: false } },
};

const addTodoReducer = createSlice({
  name: "todos",
  initialState: initialTodoState,
  reducers: {
    //Adding todos
     //using spread operator to clone previous data object then adding new object at the end
    addTodos: (state, action) => {
        state.data = {
          ...state.data,
          [state.nextId++]: {
            content: action.payload,
            completed: false,
          }
        }
      },

    //remove todos
    //data object keys will be filtered outside of the reducer 
    removeTodos: (state, action) => {
      state.data = action.payload
    },

    //update todos
    //initial state is cloned 
    //both id and content ca be edited by user 
    updateTodos: (state, action) => {
      state.data= {
        ...state.data,
        [action.payload.id]: {
          content: action.payload.content,
          completed: false,
        },
      };
    },
    //completed todos
    // status of todos is determined by user input then action details are dispatched to reducer
    
    completeTodos: (state, action) => {
      state.data ={
        ...state.data,
        [action.payload.id]: {
          content: action.payload.content,
          completed: action.payload.completed,
        }
      }
    },
  }
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
