//import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useState } from 'react';
import ColorBox from './components/ColorBox';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string';

function App() {
  const [toDoList, setToDoList] = useState([
    {id: 0, title: 'My name is Nhi'},
    {id: 1, title: 'My name is Dang'},
    {id: 2, title: 'My name is Minh'},
    {id: 3, title: 'My name is Giang'}
  ])

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 1,
    _page: 1,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        // object to string
        const paramsString = queryString.stringify(filters);
        // request url
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJson = await response.json();

        const {data, pagination} = responseJson;

        console.log(data);
        console.log(pagination);

        // set value post list
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Fail to fetch post list: ', error.message);
      }
    };

    fetchPostList();

    return () => {
      // ...
    }
  }, [filters]);

  const handlePageChange = (newPage) => {
    console.log('new page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage
    })
  }

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
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
