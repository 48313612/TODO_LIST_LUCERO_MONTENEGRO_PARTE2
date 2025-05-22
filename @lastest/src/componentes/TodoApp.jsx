import React, {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';

const TodoApp = () => {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  return (
    <div className="todo-container">
      <h1>Lista de Tareas</h1>
      <TodoForm enviarDatos={(nuevaTarea) => setTareas([...tareas, nuevaTarea])} />
      <FilterButtons />
      <TodoList tareas={tareas} setTareas={setTareas}/>
    </div>
  );
};

export default TodoApp
