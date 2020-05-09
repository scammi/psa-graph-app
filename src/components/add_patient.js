import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'; 

import Tools from "./tools.js"
import "../App.css";

function Todo({ todo, index, showDetalle, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
         <Link to='/tittle'>
          <Button className="mr-1" onClick={() => showDetalle(index)} size="sm">Detalles</Button>
         </Link>
         <Button onClick={() => removeTodo(index)} size="sm">x</Button>
      </div>
    </div>
  );
}

function AddPatient() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const showDetalle = index => {
    console.log(index)
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
      <Tools addTodo={addTodo} ></Tools>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            showDetalle={showDetalle}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default AddPatient;
