import { useState } from 'react';
import './App.css';
import Boton from './components/Boton/Boton';
import Contador from './components/Contador/Contador';

function App({ nombre, cargo, empresa, url }) {
  //manejo estado componente-obtiene y reemplaza o modifica
  const [cantClics, setCantClics] = useState(0)

  const [fruta, setFruta] = useState('banana')
  const eventoClic = () => {
    console.log('clic en el boton');
    setCantClics(cantClics + 1)

    setFruta('Piña')
    console.log(fruta);
  }
  const reiniciarContador = () => {
    console.log('clic en boton reiniciar');
    setCantClics(0)

    setFruta('Limón')
    console.log(fruta);
  }
  const [texto, setTexto] = useState('Ingrese un texto')

  const cambiarTexto = (event) => {
    setTexto(event.target.value);
  }

  return (
    <div className='contenedor'>
      Titulo
      <img src={url} alt="persona" />
      <p>
        <span>{nombre}</span>
        {cargo} de {empresa}
        Contador
      </p>

      <Contador numClics={cantClics} />
      <Boton texto='Clic' manjearClic={eventoClic} esBotonClic={true} />
      <Boton texto='Reiniciar'
        manjearClic={reiniciarContador}
        esBotonClic={false} />

        <hr />
        <input type='text' onChange={cambiarTexto} />
        <h3>{texto}</h3>
    </div>
  );
}

export default App;
