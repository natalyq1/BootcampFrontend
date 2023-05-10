import React from 'react'
import './Boton.css'
function Boton  ({texto, manjearClic, esBotonClic, convertir}) {
   
  return (
    <button className={(esBotonClic) ? 'boton-clic' : 'boton-reiniciar'} onClick={convertir} > {texto}</button>
  )
}

export default Boton