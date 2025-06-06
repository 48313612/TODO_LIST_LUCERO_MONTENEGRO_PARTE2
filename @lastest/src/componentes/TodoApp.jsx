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

  const mostrarTareaMasRapida = () => {
    const tareasCompletadas = tareas.filter(({ completada, creadaEn, completadaEn }) =>
      completada && completadaEn && creadaEn
    );
  
    if (tareasCompletadas.length === 0) {
      alert('No hay tareas completadas.');
      return;
    }
  
    let tareaRapida = tareasCompletadas[0];
    let tiempoRapida = new Date(tareaRapida.completadaEn).getTime() - new Date(tareaRapida.creadaEn).getTime();
  
    for (let i = 1; i < tareasCompletadas.length; i++) {
      const actual = tareasCompletadas[i];
      const tiempoActual = new Date(actual.completadaEn).getTime() - new Date(actual.creadaEn).getTime();
  
      if (tiempoActual < tiempoRapida) {
        tareaRapida = actual;
        tiempoRapida = tiempoActual;
      }
    }
  
    const tiempoSegundos = (tiempoRapida / 1000).toFixed(2);
    alert(`La tarea completada más rápido fue "${tareaRapida.texto}" en ${tiempoSegundos} segundos.`);
  };
  
  
  
  return (
    <div className="todo-container">
      <h1>Lista de Tareas</h1>
      <TodoForm enviarDatos={(nuevaTarea) => setTareas([...tareas, nuevaTarea])} eliminarCompletadas={eliminarCompletadas} />
      <FilterButtons filtro={filtro} cambiarFiltro={cambiarFiltro} mostrarTareaMasRapida={mostrarTareaMasRapida} />
      <TodoList tareas={tareasFiltradas} setTareas={setTareas}/>
    </div>
  );
};

export default TodoApp