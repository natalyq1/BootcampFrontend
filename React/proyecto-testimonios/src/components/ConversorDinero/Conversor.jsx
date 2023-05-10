import React, { useState } from 'react'
import Boton from './Boton/Boton'
import Resultado from './Resultado'

const Conversor = () => {

  const [conversion, setConversion] = useState(0)

  const [numero, setNumero] = useState(1)
  const convertirCopToArs = () => {
    console.log('1 COP = 0.05 ARS');
    setConversion(`${numero * 0.05} ARS`)
  }
  const convertirArsToCop = () => {
    console.log('1 ARS = 19.94 COP');
    setConversion(`${numero * 19.94} COP`)
  }

  const obtenerNumero = (elemento) => {
    setNumero(elemento.target.value);
  }

  return (
    <div>Conversor
    <Resultado mostrar={conversion}/>
    <input type="number" onChange={obtenerNumero}/>
    
    <Boton  texto ='Convertir COP a ARS' convertir={convertirCopToArs}/>
    <Boton  texto ='Convertir ARS a COP' convertir={convertirArsToCop}/>
    </div>
  )
}

export default Conversor