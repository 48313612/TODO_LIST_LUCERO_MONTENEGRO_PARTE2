import React from 'react';

const FilterButtons = () => {
    return (
      <>
        <select className= "mostrarFiltro">
          <option value="todas">Todas</option>
          <option value="completadas">Completadas</option>
          <option value="pendientes">Pendientes</option>
        </select>
        <button className= "tareaRapida">Tarea más rápida</button>
      </>
    );
  };

export default FilterButtons