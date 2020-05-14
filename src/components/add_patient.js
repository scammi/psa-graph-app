import React, { useState } from "react";
import { Button } from "react-bootstrap";
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
         <Link to= {`/tittle/${todo.text}`} >
          <Button className="mr-1" onClick={() => showDetalle()} size="sm">Detalles</Button>
         </Link>
         <Button onClick={() => removeTodo(index)} size="sm">x</Button>
      </div>
    </div>
  );
}

function AddPatient() {
  const [todos, setTodos] = useState([
    {
      text: "Octavio",
      isCompleted: false
    },
    {
      text: "Pedro",
      isCompleted: false
    },
    {
      text: "Dario",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const showDetalle = () => {
    console.log("works");
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
      <h1>PsaGraph</h1>
      <Tools add={addTodo} btnTittle="add patient" ></Tools>
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
