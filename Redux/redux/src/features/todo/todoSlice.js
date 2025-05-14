//reduces
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { act } from 'react';

const  initialState = {
    todo: [{id: "abc", task: "demo-task", isDone: false}],
  };
 
  export const todoSlice= createSlice({
    name: "todo",
    initialState,
    reducers: { 
        addTodo: (state, action) => {
            const newTodo = {
                id: 123,
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos =state.todo.filter((todo) =>
                 todo.id != action.payload)
             
        },
        marksAsDone: (state, action) => {
            state.todos =state.todos.map((todo) => {
              if(todo.id === action.payload) {
                 todo.isDone = true;
              }  
             })
        }
    }
  });
  export const {addTodo , deleteTodo, marksAsDone} = todoSlice.actions;
  export default todoSlice.reducer;