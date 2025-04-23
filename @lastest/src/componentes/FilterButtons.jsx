import React from 'react';

const FilterButtons = () => {
    return (
      <>
        <select>
          <option value="todas">Todas</option>
          <option value="completadas">Completadas</option>
          <option value="pendientes">Pendientes</option>
        </select>
        <button>Tarea más rápida</button>
      </>
    );
  };

export default FilterButtons