import React from 'react'

function Texto ({cambiarTexto}) {
  return (
    <input type='text' onChange={cambiarTexto}></input>
  )
}

export default Texto