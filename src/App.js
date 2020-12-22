//import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
import ColorBox from './components/ColorBox';
import ToDoList from './components/ToDoList';

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
    
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDoList(newToDoList);
  }

  return (
    <div className="app">
      <h1>Welcome to Reactjs</h1>
      <h2>Dang Nguyen</h2>
      <ColorBox />
      <ToDoList toDoList={toDoList} toDoClick={handleToDoClick}/>
    </div>
  );
}

export default App;
