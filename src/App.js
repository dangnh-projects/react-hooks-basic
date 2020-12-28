//import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
import ColorBox from './components/ColorBox';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [toDoList, setToDoList] = useState([
    {id: 0, title: 'My name is Nhi'},
    {id: 1, title: 'My name is Dang'},
    {id: 2, title: 'My name is Minh'},
    {id: 3, title: 'My name is Giang'}
  ])

  const handleToDoClick = (todo) => {
    console.log(todo);
    const index = toDoList.findIndex(x => x.id === todo.id);
    if(index < 0) return;
    
    const newTodoList = [...toDoList];
    newTodoList.splice(index, 1);
    setToDoList(newTodoList);
  }

  const handleTodoFormSubmit = (formValue) => {
    console.log('Form submit: ', formValue)

    // add new todo to current todo list
    const newTodo = {
      id: toDoList.length + 1,
      ...formValue
    }
    const newTodoList = [...toDoList];
    newTodoList.push(newTodo);
    setToDoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>Welcome to Reactjs</h1>
      <h2>Dang Nguyen</h2>
      <ColorBox />
      <ToDoForm onSubmit={handleTodoFormSubmit} />
      <ToDoList toDoList={toDoList} toDoClick={handleToDoClick}/>
    </div>
  );
}

export default App;
