//import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useState } from 'react';
import ColorBox from './components/ColorBox';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import PostList from './components/PostList';

function App() {
  const [toDoList, setToDoList] = useState([
    {id: 0, title: 'My name is Nhi'},
    {id: 1, title: 'My name is Dang'},
    {id: 2, title: 'My name is Minh'},
    {id: 3, title: 'My name is Giang'}
  ])

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        // request url
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&page=1';
        const response = await fetch(requestUrl);
        const responseJson = await response.json();

        const {data, pagination} = responseJson;

        console.log(data);
        console.log(pagination);

        // set value post list
        setPostList(data);
      } catch (error) {
        console.log('Fail to fetch post list: ', error.message);
      }
    };

    fetchPostList();

    return () => {
      // ...
    }
  }, []);

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
      <h1>Welcome to Reactjs - PostList</h1>
      {/* <h2>Dang Nguyen</h2> */}
      {/* <ColorBox /> */}
      {/* <ToDoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <ToDoList toDoList={toDoList} toDoClick={handleToDoClick}/> */}
      <PostList posts={postList} />
    </div>
  );
}

export default App;
