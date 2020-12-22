import React from 'react';

const ToDoList = (props) => {
    const {toDoList, toDoClick } = props;
    const handleClick = (todo) => {
        if(toDoClick) {
            toDoClick(todo)
        }
    }
    return (
        <ul>
            {toDoList && toDoList.map(toDo => (
                <li 
                    key={toDo.id} 
                    onClick={() => handleClick(toDo)}
                >
                    {toDo.title}
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;