import React, { useState } from 'react';
import TodoForm from '../components/Todo/TodoForm';
import TodoList from '../components/Todo/TodoList';
import Navbar from '../navbar/Navbar';
import { Box, Container, Typography } from '@mui/material';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const handleAddTodo = (newTodo) => {
    if (editTodo) {
      setTodos(todos.map(todo =>
        todo.id === newTodo.id ? newTodo : todo
      ));
      setEditTodo(null);
    } else {
      setTodos([...todos, { ...newTodo, id: Date.now(), completed: false }]);
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdateTodo = (todo) => {
    setEditTodo(todo);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ mt: 4 }}>
          
          <TodoForm
            onAddTodo={handleAddTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
          <TodoList
            todos={todos}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
            onEdit={handleUpdateTodo}
          />
        </Box>
      </Container>
    </>
  );
};

export default TodoPage;
