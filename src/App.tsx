import './App.css';
import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';
import React, { useState } from 'react';

export const App = () => {

  const [showTodoForm, setShowTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Water Plants', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Feed Puppy', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User One' }])

  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }
    else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos(todos => [...todos, newTodo])
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });

    setTodos(filtered);

  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button className='btn btn-primary' onClick={() => setShowTodoForm(!showTodoForm)}>
            {showTodoForm ? 'Close New Todo' : 'New Todo'}</button>
          {showTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>

    </div>
  );
}