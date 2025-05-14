import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() === "") return;
        setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <input
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <button onClick={addNewTask}>Add Task</button>
            <hr />
            <h1>ToDo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
