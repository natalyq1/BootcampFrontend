import React from 'react'
import './Boton.css'
function Boton  ({texto, manjearClic, esBotonClic}) {
   
  return (
    <button className={(esBotonClic) ? 'boton-clic' : 'boton-reiniciar'} onClick={manjearClic} > {texto}</button>
  )
}

export default Boton