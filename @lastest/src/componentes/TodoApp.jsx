import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';

const TodoApp = () => {
  const tareas = [
    {
      id: 1,
      texto: 'ir al supermercado',
      completada: true,
      creadaEn: '2025-04-23',
      completadaEn: '2025-04-23',
    },
    {
      id: 2,
      texto: 'estudiar para prueba de EFSI',
      completada: false,
      creadaEn: '2025-04-23',
      completadaEn: null,
    },
  ];

  return (
    <div className="todo-container">
      <h1>Lista de Tareas</h1>
      <TodoForm />
      <FilterButtons />
      <TodoList tareas={tareas} />
    </div>
  );
};

export default TodoApp