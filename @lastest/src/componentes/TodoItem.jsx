import React from 'react';

function TodoItem({ datos, eliminarTarea, marcarCompletada, index}) {
  const { texto, completada, creadaEn, completadaEn } = datos;
    return (
      <li className={completada ? 'completada' : ''}>
       <input type="checkbox" checked={completada} onChange={() => marcarCompletada(index)}/>
        <span className={completada ? 'completada' : ''}>
          {texto}
        </span>
        <span>{creadaEn}</span>
        <button onClick={() => eliminarTarea(index)}> Eliminar × </button>
      </li>
    );
  };
  
export default TodoItem;
