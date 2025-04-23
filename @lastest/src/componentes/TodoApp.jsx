import React from 'react';

import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

const tareasHardcodeadas = [
  {
    texto: "hacer mi cama",
    completada: false,
    creadaEn: "2025-04-23",
    completadaEn: null
  },
  {
    texto: "estudiar para prueba EFSI",
    completada: true,
    creadaEn: "2025-04-23",
    completadaEn: "2025-04-27"
  }
];

function TodoApp() {
  return (
    <div className="contenedor">
      <TodoForm />
      <TodoList tareas={tareasHardcodeadas} />
      <button className="btn btn-danger">Eliminar completadas</button>
    </div>
  );
}

export default TodoApp