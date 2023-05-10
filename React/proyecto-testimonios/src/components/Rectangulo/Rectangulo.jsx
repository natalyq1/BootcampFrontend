import React, { useState } from 'react'
import Boton from './Boton/Boton'
import Resultado from './Resultado'

const Rectangulo = () => {

  const [conversion, setConversion] = useState(0)

  const [numero, setNumero] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const Superficie = () => {
    setConversion(`${numero * numero2} es la superficie del rectangulo`)
  }
  

  const obtenerBase = (elemento) => {
    setNumero(elemento.target.value);
  }
  const obtenerAltura = (elemento) => {
    setNumero2(elemento.target.value);
  }

  return (
    <div>
      <h1>Rectángulo</h1>
      <p>Calcular la superficie</p>
    
    <label>Base: </label>
    <input type="number" onChange={obtenerBase}/>
    <label>Altura: </label>
    <input type="number" onChange={obtenerAltura}/>
    <Boton  texto ='Calcular' convertir={Superficie}/>
    <Resultado mostrar={conversion}/>
    </div>
  )
}

export default Rectangulo
/*superficie rectangulo = base *altura*/