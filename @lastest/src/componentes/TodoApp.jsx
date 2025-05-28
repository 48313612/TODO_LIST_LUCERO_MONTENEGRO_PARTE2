import React, {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';

const TodoApp = () => {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const eliminarCompletadas = () => {
    setTareas(tareas.filter(tarea => !tarea.completada));
  };

  const [filtro, setFiltro] = useState('todas');
  const cambiarFiltro = (nuevoFiltro) => {
    setFiltro(nuevoFiltro);
  };

  
  function obtenerTareasFiltradas(tareas, filtro) {
    let resultado = [];
    if (filtro === 'todas') {
      resultado = tareas;
    } else if (filtro === 'completadas') {
      resultado = tareas.filter(tarea => tarea.completada);
    } else if (filtro === 'pendientes') {
      resultado = tareas.filter(tarea => !tarea.completada);
    } else {
      resultado = tareas;
    }
    return resultado;
  }

  const tareasFiltradas = obtenerTareasFiltradas(tareas, filtro);
  
  return (
    <div className="todo-container">
      <h1>Lista de Tareas</h1>
      <TodoForm enviarDatos={(nuevaTarea) => setTareas([...tareas, nuevaTarea])} eliminarCompletadas={eliminarCompletadas} />
      <FilterButtons filtro={filtro} cambiarFiltro={cambiarFiltro} />
      <TodoList tareas={tareasFiltradas} setTareas={setTareas}/>
    </div>
  );
};

export default TodoApp