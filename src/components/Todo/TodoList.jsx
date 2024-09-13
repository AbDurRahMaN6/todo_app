import React from 'react';
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { green, grey, yellow } from '@mui/material/colors';

const TodoList = ({ todos, onToggleComplete, onDelete, onEdit }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
      All Thing List
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h6">Title</Typography></TableCell>
            <TableCell><Typography variant="h6">Description</Typography></TableCell>
            <TableCell><Typography variant="h6">Status</Typography></TableCell>
            <TableCell><Typography variant="h6">Actions</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.description}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => onToggleComplete(todo.id)}
                  sx={{ 
                    backgroundColor: todo.completed ? green[500] : yellow[500], 
                    color: 'white',
                    '&:hover': { backgroundColor: todo.completed ? green[700] : yellow[700] }
                  }}
                >
                  {todo.completed ? 'Completed' : 'Incomplete'}
                </Button>
              </TableCell>
              <TableCell>
                <IconButton
                  color="success"
                  onClick={() => onEdit(todo)}
                  disabled={todo.completed}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => onDelete(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default TodoList;
