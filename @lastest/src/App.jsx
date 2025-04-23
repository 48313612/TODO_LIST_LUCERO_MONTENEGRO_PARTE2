import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from './componentes/TodoApp.jsx'

function App() {

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TodoApp />
    </div>
  )
}

export default App