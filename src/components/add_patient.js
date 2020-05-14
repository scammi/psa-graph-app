import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'; 
import firebase from '../firebase.js'
import Tools from "./tools.js"
import "../App.css";

function Todo({ todo, index, showDetalle, removeTodo }) {
  
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.name}

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
    // {
    //   text: "Octavio",
    //   isCompleted: false
    // }
  ]);

  useEffect(()=>{
    firebase
    .firestore()
    .collection('patient')
    .onSnapshot((snapshot)=>{
      const fire_patient = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }))
      console.log(fire_patient)
      setTodos(fire_patient)


    })
  },[])
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    
    firebase.firestore().collection('patient').add({
      name: text
    })

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
