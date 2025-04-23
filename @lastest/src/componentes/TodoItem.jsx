import React from 'react';

function TodoItem() {
  return (
    <li>
      <div>
        <input type="checkbox" checked={tarea.completada} readOnly />
        {tarea.texto}
        <div>Creada: {tarea.creadaEn}</div>
        {tarea.completadaEn && <div>Completada: {tarea.completadaEn}</div>}
      </div>
      <button className="btn btn-outline-danger">Eliminar</button>
    </li>
  );
}

export default TodoItem