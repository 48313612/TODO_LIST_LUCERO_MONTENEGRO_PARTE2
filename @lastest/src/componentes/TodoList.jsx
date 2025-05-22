import React, {useEffect} from 'react';
import TodoItem from './TodoItem';

function TodoList({ tareas, setTareas }) {
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const eliminarTarea = (tareaAEliminar) => {
    setTareas(tarea.filter(tarea => tarea !== tareaAEliminar));
  };

  return (
    <div>
      {tareas.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        tareas.map((tarea, index) => (
          <TodoItem key={index} datos={tarea} eliminarTarea={eliminarTarea} />
        ))
      )}
    </div>
  );
}

export default TodoList;
