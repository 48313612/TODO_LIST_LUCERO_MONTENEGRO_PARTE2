import React from 'react';

function TodoItem({ datos, eliminarTarea}) {
  const { texto, completada, creadaEn, completadaEn } = datos;
    return (
      <li className={tarea.completada ? 'completada' : ''}>
        <input type="checkbox" checked={tarea.completada} />
        <span className={tarea.completada ? 'completada' : ''}>
          {tarea.texto}
        </span>
        <span>
          {tarea.creadaEn}
        </span>
        <button onClick={() => eliminarTarea(datos)}> Eliminar × </button>
      </li>
    );
  };
  
export default TodoItem;
