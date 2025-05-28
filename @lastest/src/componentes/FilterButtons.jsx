import React from 'react';

function FilterButtons({ filtro, cambiarFiltro }) {
  return (
    <>
      <select value={filtro} onChange={(e) => cambiarFiltro(e.target.value)} className="mostrarFiltro">
        <option value="todas">Todas</option>
        <option value="completadas">Completadas</option>
        <option value="pendientes">Pendientes</option>
      </select>
      <button onClick={mostrarTareaMasRapida} className='tareaMasRapida' >Tarea más rápida</button>
    </>
  );
}

export default FilterButtons;
