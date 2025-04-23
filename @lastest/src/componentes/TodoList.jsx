import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tareas }) => {
  return (
    <ul id="listaTareas" className="list-group mt-3">
      {tareas.map((tarea) => (
        <TodoItem key={tarea.id} tarea={tarea} />
      ))}
    </ul>
  );
};

export default TodoList