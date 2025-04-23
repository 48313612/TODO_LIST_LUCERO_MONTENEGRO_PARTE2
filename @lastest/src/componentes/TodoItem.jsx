import React from 'react';

const TodoItem = ({ tarea }) => {
    return (
      <li className={tarea.completada ? 'completada' : ''}>
        <input type="checkbox" checked={tarea.completada} readOnly />
        <span className={tarea.completada ? 'completada' : ''}>
          {tarea.texto}
        </span>
        <span>
          {tarea.creadaEn}
        </span>
        <button>Eliminar</button>
      </li>
    );
  };
  
export default TodoItem