import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTodo = {
      id: todos.length + 1,
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-title">To-Do List</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="todo-input"
          placeholder="Add a new todo"
        />
        <button type="submit" className="todo-submit-btn">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-item-text">{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)} className="todo-delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
