import React, {useState} from 'react';

function TodoForm({ enviarDatos }){

  const [tarea, setTarea] = useState({
    texto: '',
    completada: false,
    creadaEn: null,
    completadaEn: null,
  });

  const detectoCambios = (e) => {
    const { name, value } = e.target;
    setTarea((tarea) => ({ ...tarea, [name]: value }));
  };

  const tomarDatos = (e) => {
    e.preventDefault();
    const valido = validarTexto(tarea.texto);
    tarea.completada = false;
    tarea.creadaEn = Date.now();

    if (valido) { 
      enviarDatos(tarea); 
      setTarea({
        texto: '',
        completada: false,
        creadaEn: null,
        completadaEn: null,
    });
    }
  };

   const validarTexto = (text) => text.trim().length > 0;

  //FORM
  return (
    <form onSubmit={tomarDatos}>
      <div className="controles">
        <input type="text" placeholder="Escriba la tarea" name="texto" value={tarea.texto} onChange={detectoCambios} required/>
        {/* {!validoTexto && <p> ERROR. Ingrese una tarea </p>} */}
        <button type ="submit" >Agregar tarea</button>
        <button className="eliminar">Eliminar completadas</button>
      </div>
      </form>
  )
}
export default TodoForm;
