import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList({ tareas }) {
    return (
      <ul>
        {tareas.map((tarea, i) => (
          <TodoItem key={i} tarea={tarea} />
        ))}
      </ul>
    );
}

export default TodoList