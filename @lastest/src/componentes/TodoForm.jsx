import React from 'react';

const TodoForm = () => {
    return (
      <div className="controles">
        <input type="text" />
        <button>Agregar tarea</button>
        <button className="eliminar">Eliminar completadas</button>
      </div>
    );
  };

export default TodoForm