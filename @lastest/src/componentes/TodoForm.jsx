import React, {useState} from 'react';

function TodoForm({ enviarDatos }){

  const [tarea, setTarea] = useState({
    texto: '',
    completada: '',
    creadaEn: '',
    completadaEn: '',
  });

  const detectoCambios = (e) => {
    setTarea(e.target.value)
  };

  const tomarDatos = (e) => {
    e.preventDefault();
    const validoTexto = validarTexto(tarea.texto);
    tarea.completada = false;
    tarea.creadaEn = Date.now();

    if (valido) { 
      enviarDatos(tarea); 
      setTarea({
        texto: '',
        completada: '',
        creadaEn: '',
        completadaEn: '',
    });
    }
  };

  const validarTexto = (text) => text.trim().length > 0;

  //FORM
  return (
    <form onSubmit={tomarDatos}>
      <div className="controles">
        <input type="text" placeholder="Escriba la tarea" onChange={detectoCambios} required/>
        {/* {!validoTexto && <p> ERROR. Ingrese una tarea </p>} */}
        <button type ="submit" >Agregar tarea</button>
        <button className="eliminar">Eliminar completadas</button>
      </div>
      </form>
  )
}
export default TodoForm;
