import React, { useEffect } from 'react';
import TodoItem from './TodoItem';

function TodoList({ tareas, setTareas }) {
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const eliminarTarea = (indexEliminar) => {
    setTareas(tareas.filter((_, index) => index !== indexEliminar));
  };

  const marcarCompletada = (indexMarcado) => {
    setTareas(
      tareas.map((tarea, index) =>
        index === indexMarcado
          ? {
              ...tarea,
              completada: !tarea.completada,
              completadaEn: !tarea.completada ? new Date().toISOString() : null,
            }
          : tarea
      )
    );
  };

  return (
    <div>
      {tareas.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        tareas.map((tarea, index) => (
          <TodoItem
            key={index}
            index={index} 
            datos={tarea}
            eliminarTarea={eliminarTarea}
            marcarCompletada={marcarCompletada}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;