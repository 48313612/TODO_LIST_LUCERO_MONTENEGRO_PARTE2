import React, {useState} from 'react';

function TodoForm({ enviarDatos, eliminarCompletadas }){

  const [tarea, setTarea] = useState({
    texto: '',
    completada: false,
    creadaEn: null,
    completadaEn: null,
  });

  const [valido, setValido] = useState(true);

  const detectoCambios = (e) => {
    const { name, value } = e.target;
    setTarea((tarea) => ({ ...tarea, [name]: value }));
  };

  const tomarDatos = (e) => {
    e.preventDefault();
    let esValido = validarTexto(tarea.texto);
    setValido(esValido);
    tarea.completada = false;
    tarea.creadaEn = Date.now();

    if (esValido) { 
      enviarDatos(tarea); 
      setTarea({
        texto: '',
        completada: false,
        creadaEn: null,
        completadaEn: null,
    });
    setValido(true);
    }
  };

  const validarTexto = (text) => text.trim().length > 0;


  //FORM
  return (
    <form onSubmit={tomarDatos}>
      <div className="controles">
        <input type="text" placeholder="Escriba la tarea" name="texto" value={tarea.texto} onChange={detectoCambios}/>
        {!valido && <p style={{ color: 'red' }}>ERROR. Ingrese una tarea</p>}
        <button type ="submit" >Agregar tarea</button>
        <button className="eliminar" onClick={() => eliminarCompletadas()}>Eliminar completadas</button>
      </div>
      </form>
  )
}
export default TodoForm;
